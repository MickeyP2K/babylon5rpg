export class Babylon5Config extends FormApplication {
  static get getDefaults() {
    return {
      addMenuButton: true,
    };
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      title: game.i18n.localize('BABYLON5RPG.MenuLabel'),
      id: 'babylon5prgSettings',
      icon: 'fas fa-cogs',
      template: 'systems/babylon5rpg/module/babylon5prgSettings.html',
      width: 400,
      closeOnSubmit: true,
    });
  }

  getData(options) {
    return mergeObject(
      {
        fontStyle: game.settings.get('babylon5rpg', 'fontStyle'),
        fontColour: game.settings.get('babylon5rpg', 'fontColour'),
      }
      // this.reset ? Babylon5Config.ARPG_OPTIONS() : Babylon5Config.ARPG_OPTIONS()
    );
  }

  activateListeners(html) {
    super.activateListeners(html);

    // html.find('select').change(this.onApply.bind(this));
    html.find('button[name="reset"]').click(this.onReset.bind(this));

    document.getElementById('fontStyle').value = game.settings.get('babylon5rpg', 'fontStyle');
    // this.reset = false;
  }

  // onApply(formData) {
  //   var r = document.querySelector(':root');
  //   r.style.setProperty('--babylon5borders', formData.fontColour);
  //   r.style.setProperty('--babylon5font', formData.fontStyle);

  //   this.render();
  // }

  onReset() {
    // this.reset = true;
    game.settings.set('babylon5rpg', 'fontStyle', 'Wallpoet');
    game.settings.set('babylon5rpg', 'fontColour', '#6e6e6e');
    this.render();
  }

  async _updateObject(event, formData) {
    // console.log('_updateObject -> formData', formData);
    await game.settings.set('babylon5rpg', 'fontColour', formData.fontColour);
    await game.settings.set('babylon5rpg', 'fontStyle', formData.fontStyle);
    ui.notifications.info(game.i18n.localize('BABYLON5RPG.Consumables'));
  }
  close() {
    super.close();
  }

  // * Creates or removes the quick access config button
  // * @param  {Boolean} shown true to add, false to remove

  static toggleConfigButton(shown) {
    const button = $('#Babylon5RPGButton');
    if (button) button.remove();

    if (shown) {
      const title = game.i18n.localize('BABYLON5RPG.MenuLabel');

      $(`<button id="Babylon5RPGButton" data-action="Babylon5Config" title="${title}">
       <i class="fas fa-palette"></i> ${title}
     </button>`)
        .insertAfter('button[data-action="configure"]')
        .on('click', (event) => {
          const menu = game.settings.menus.get('babylon5rpg.babylon5rpgSettings');
          if (!menu) return ui.notifications.error('No submenu found for the provided key');
          const app = new menu.type();
          return app.render(true);
        });
    }
  }
}
