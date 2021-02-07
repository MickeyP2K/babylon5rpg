export default function () {
  game.settings.register('babylon5rpg', 'defaultTokenSettings', {
    name: 'BABYLON5RPG.DefProto',
    hint: 'BABYLON5RPG.DefProtoHint',
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
  });
  game.settings.register('babylon5rpg', 'systemMigrationVersion', {
    name: 'System Migration Version',
    scope: 'world',
    config: false,
    type: String,
    default: 0,
  });

  game.settings.register('babylon5rpg', 'switchMouseKeys', {
    name: 'BABYLON5RPG.SwitchKeys',
    hint: 'BABYLON5RPG.SwitchKeysHint',
    scope: 'world',
    type: Boolean,
    default: false,
    config: true,
    onChange: () => {
      location.reload();
    },
  });
}
