import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePromptInput } from './dto/create-prompt.input';
import { UpdatePromptInput } from './dto/update-prompt.input';
import { Prompt } from './entities/prompt.entity';

@Injectable()
export class PromptService {
  constructor(
    @InjectRepository(Prompt) private promptRepository: Repository<Prompt>,
  ) {}

  async create(createPromptInput: CreatePromptInput): Promise<Prompt> {
    const prompt = await this.promptRepository.create(createPromptInput);
    return await this.promptRepository.save(prompt);
  }

  async findAll(): Promise<Array<Prompt>> {
    return await this.promptRepository.find();
  }

  async findOne(promptId: string): Promise<Prompt> {
    const prompt = await this.promptRepository.findOne({
      where: {
        promptId,
      },
    });
    if (!prompt) {
      throw new NotFoundException(`Prompt #${promptId} not found`);
    }
    return prompt;
  }

  async update(
    promptId: string,
    updatePromptInput: UpdatePromptInput,
  ): Promise<Prompt> {
    const prompt = await this.promptRepository.preload({
      promptId: promptId,
      ...updatePromptInput,
    });
    if (!prompt) {
      throw new NotFoundException(`Prompt #${promptId} not found`);
    }
    return this.promptRepository.save(prompt);
  }

  async remove(promptId: string): Promise<Prompt> {
    const prompt = await this.findOne(promptId);
    await this.promptRepository.remove(prompt);
    return {
      promptId: promptId,
      title: '',
      content: '',
    };
  }
}
