import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prompt } from './entities/prompt.entity';
import { PromptResolver } from './prompt.resolver';
import { PromptService } from './prompt.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prompt])],
  providers: [PromptResolver, PromptService],
})
export class PromptModule {}
