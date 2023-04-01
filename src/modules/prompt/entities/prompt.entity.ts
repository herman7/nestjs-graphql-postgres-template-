import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Prompt {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the prompt' })
  promptId: string;

  @Column()
  @Field(() => String, { description: 'title of the prompt' })
  title: string;

  @Column()
  @Field(() => String, { description: 'content of the prompt' })
  content: string;
}
