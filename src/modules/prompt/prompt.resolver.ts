import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatePromptInput } from './dto/create-prompt.input';
import { UpdatePromptInput } from './dto/update-prompt.input';
import { Prompt } from './entities/prompt.entity';
import { PromptService } from './prompt.service';

@Resolver(() => Prompt)
export class PromptResolver {
  constructor(private readonly promptService: PromptService) {}

  @Mutation(() => Prompt)
  createPrompt(
    @Args('createPromptInput') createPromptInput: CreatePromptInput,
  ) {
    return this.promptService.create(createPromptInput);
  }

  @Query(() => [Prompt], { name: 'prompts' })
  findAll() {
    // TODO 加参数
    return this.promptService.findAll();
  }

  @Query(() => Prompt, { name: 'prompt' })
  findOne(@Args('promptId', { type: () => String }) promptId: string) {
    return this.promptService.findOne(promptId);
  }

  @Mutation(() => Prompt)
  updateUser(@Args('updateUserInput') updatePromptInput: UpdatePromptInput) {
    return this.promptService.update(
      updatePromptInput.promptId,
      updatePromptInput,
    );
  }

  @Mutation(() => Prompt)
  removeUser(@Args('promptId', { type: () => String }) promptId: string) {
    return this.promptService.remove(promptId);
  }
}
