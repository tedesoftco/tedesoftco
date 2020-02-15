import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Contacto } from '../../interfaces/contacto.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formContac: FormGroup;

  errors: any;
  

  submitted = false;

  constructor(public contactoService: ContactoService, private formContacto: FormBuilder) {
   }

   EnviarContacto() {
    this.submitted = true;
    if (this.formContac.invalid) {
      return;
    }
    let contacto: Contacto;
    contacto = {
      nombres : this.formContac.get('nombres').value,
      apellidos : this.formContac.get('apellidos').value,
      telefono : this.formContac.get('telefono').value,
      email : this.formContac.get('telefono').value,
      observaciones : this.formContac.get('observaciones').value,
      aceptoContacto : this.formContac.get('aceptoContacto').value,
    };
    this.contactoService.addContacto(contacto).subscribe(
      result => {
        // Handle result
        console.log(result)
      },
      error => {
        this.errors = error;
        console.log(error);
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    );
  }

  get f() { return this.formContac.controls; }

  ngOnInit() {
    this.formContac = this.formContacto.group({
      nombres: [null, [Validators.required, Validators.minLength(6)]],
      apellidos: [null, [Validators.required, Validators.minLength(6)]],
      telefono: [null],
      email: [null, [Validators.required, Validators.email]],
      observaciones: [null , Validators.required],
      aceptoContacto: [false, Validators.requiredTrue]
    });
  }
}
