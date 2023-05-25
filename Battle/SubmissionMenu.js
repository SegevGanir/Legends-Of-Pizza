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