export class UserForm {
  constructor(public parent: Element) { }

  templete(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User Name</div>
        <input />
        <button>Click Me</button>
      </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.templete();

    this.parent.append(templateElement.content);
  }
}