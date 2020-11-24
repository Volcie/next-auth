export default (options) => {
  return {
    id: 'discord',
    name: 'Discord',
    type: 'oauth',
    version: '2.0',
    scope: Array.isArray(options.scope) ? options.scope.split(" ") : options.scope,
    params: { grant_type: 'authorization_code' },
    accessTokenUrl: 'https://discord.com/api/oauth2/token',
    authorizationUrl:
      'https://discord.com/api/oauth2/authorize?response_type=code&prompt=none',
    profileUrl: 'https://discord.com/api/users/@me',
    profile: (profile) => {
      return profile
    },
    ...options
  }
}
