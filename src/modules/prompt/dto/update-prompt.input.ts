import { CreatePromptInput } from './create-prompt.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePromptInput extends PartialType(CreatePromptInput) {
  @Field(() => String)
  promptId: string;
}
