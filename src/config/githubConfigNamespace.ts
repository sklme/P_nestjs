import { registerAs } from '@nestjs/config';

export default registerAs('github', () => ({
  token: process.env.GITHUB_TOKEN || 'test',
  port: process.env.GITHUB_PORT || 2001,
}));
