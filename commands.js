import 'dotenv/config';
import {getRPSChoices} from './game.js';
import {getScrimJoinChoices} from './registering.js';
import {capitalize, InstallGlobalCommands} from './utils.js';

// Get the game choices from game.js
function createCommandChoices() {
  const choices = getRPSChoices();
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: capitalize(choice),
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}
function createScrimJoinChoices() {
  const choices = getScrimJoinChoices();
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: capitalize(choice),
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}


// Simple test command
export const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

const SPEAK_COMMAND = {
  name: 'speak',
  description: 'demo command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

// Command containing options
const CHALLENGE_COMMAND = {
  name: 'challenge',
  description: 'Challenge to a match of rock paper scissors',
  options: [
    {
      type: 3,
      name: 'object',
      description: 'Pick your object spongeboy me bob',
      required: true,
      choices: createCommandChoices(),
    },
  ],
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 2],
};

const CREATE_SCRIM_COMMAND = {
name: 'create_scrim',
  description: 'Create a scrim registry, that people can join',
  options: [
    {
      type: 3,
      name: 'object',
      description: 'Are you playing this match?',
      required: true,
      choices: createScrimJoinChoices(),
    },
  ],
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 2],
}

const ALL_COMMANDS = [TEST_COMMAND, SPEAK_COMMAND, CHALLENGE_COMMAND, CREATE_SCRIM_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
