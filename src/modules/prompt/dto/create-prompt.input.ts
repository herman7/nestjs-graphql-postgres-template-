import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePromptInput {
  @Field(() => String, { description: 'title of the prompt' })
  title: string;

  @Field(() => String, { description: 'content of the prompt' })
  content: string;
}
