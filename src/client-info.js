"use strict";

export class ClientInfoGeneral {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.avatar = data.avatar;
  }
}

export class ClientInfoJob {
  constructor(data) {
    this.company = data.company;
    this.title = data.title;
  }
}

export class ClientInfoContact {
  constructor(data) {
    this.email = data.email;
    this.phone = data.phone;
  }
}

export class ClientInfoAddress {
  constructor(data) {
    this.street = data.street;
    this.city = data.city;
    this.zipCode = data.zipCode;
    this.country = data.country;
  }

  get searchString() {}
}

export class ClientInfo {
  constructor(data) {
    this.general = data.general ? new ClientInfoGeneral(data.general) : null;
    this.job = data.job ? new ClientInfoJob(data.job) : null;
    this.contact = data.contact ? new ClientInfoContact(data.contact) : null;
    this.address = data.address ? new ClientInfoAddress(data.address) : null;

    // Строим строку для поиска.
    let strings = [];

    if (this.general) {
      strings.push(this.general.firstName);
      strings.push(this.general.lastName);
      strings.push(this.general.avatar);
    }

    if (this.job) {
      strings.push(this.job.company);
      strings.push(this.job.title);
    }

    if (this.contact) {
      strings.push(this.contact.email);
      strings.push(this.contact.phone);
    }

    if (this.address) {
      strings.push(this.address.street);
      strings.push(this.address.city);
      strings.push(this.address.zipCode);
      strings.push(this.address.country);
    }

    this.searchString = strings.join("");
  }
}
