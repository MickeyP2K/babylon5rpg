export class Babylon5RPGSetup {
  static async setup() {
    console.warn('***************************************************************');
    console.warn('Babylon5RPGSetup Directories and tables');
    console.warn('***************************************************************');

    function pExists() {
      if (Folder.collection.entities.filter((entry) => entry.data.name == 'Babylon5 Tables').length > 0) {
        return true;
      } else {
        return false;
      }
    }
    function itemExists() {
      if (Folder.collection.entities.filter((entry) => entry.data.name == 'Skill-Stunts').length > 0) {
        return true;
      } else {
        return false;
      }
    }

    let isHere = pExists();

    if (!isHere) {
      let folder = await Folder.create(
        {
          color: '',
          name: 'Babylon5 Tables',
          parent: null,
          nullsort: 100000,
          type: 'RollTable',
        },
        { temporary: false }
      );

      let crefolder = await Folder.create(
        {
          color: '#ff0000',
          name: 'Babylon5 Creature Tables',
          parent: folder.id,
          nullsort: 100000,
          type: 'RollTable',
        },
        { temporary: false }
      );
      let mothfolder = await Folder.create(
        {
          color: '#00c100',
          name: 'Babylon5 Mother Tables',
          parent: folder.id,
          nullsort: 100000,
          type: 'RollTable',
        },
        { temporary: false }
      );

      // Copy the gm tables from the pack into the correct folder so it's available to the templates.
      var gTables = game.packs.get('babylon5rpg.tables_gm');
      gTables.getContent().then((d) =>
        d.forEach((a) => {
          game.tables.importFromCollection('babylon5rpg.tables_gm', a.data._id, { folder: mothfolder.id });
        })
      );
    }

    let isItems = itemExists();

    if (!isItems) {
      let folder = await Folder.create(
        {
          color: '',
          name: 'Skill-Stunts',
          parent: null,
          nullsort: 100000,
          type: 'Item',
        },
        { temporary: false }
      );

      // Copy the gm tables from the pack into the correct folder so it's available to the templates.
      var gItems = game.packs.get('babylon5rpg.skill-stunts');
      gItems.getContent().then((d) =>
        d.forEach((a) => {
          game.items.importFromCollection('babylon5rpg.skill-stunts', a.data._id, { folder: folder.id });
        })
      );

      ui.items.render();
      ui.notifications.info('First-Time-Setup complete');
    }
  }
}
