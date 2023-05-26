class SubmissionMenu { 
  constructor({ caster, enemy, onComplete }) {
    this.caster = caster;
    this.enemy = enemy;
    this.onComplete = onComplete;
  }

  getPages() {
    return {
      root: [
        {
          label: "Attack",
          description: "Choose an attack",
          handler: () => {
            // Do something when chosen...
          }
        },
        {
          label: "items",
          description: "Choose an item",
          disabled: true,
          handler: () => {
            //Go to items page
          }
        },
        {
          label: "swap",
          description: "Change to another pizza from your team",
          handler: () => {
            //See pizzas on your team
          }
        }
      ],
      attacks: [

      ],
    }
  }

  decide() {
    this.onComplete({
      action: Actions[ this.caster.actions[0] ],
      target: this.enemy
    })
  }

  showMenu(container) {
    this.keyboardMenu = new KeyboardMenu();
    this.keyboardMenu.init(container);
    this.keyboardMenu.setOptions( this.getPages().root )
  }

  init(container) {

    if (this.caster.isPlayerControlled) {
      //Show some UI
      this.showMenu(container)
    } else {
      this.decide()
    }
  }
}