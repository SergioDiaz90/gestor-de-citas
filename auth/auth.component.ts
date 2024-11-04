import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HandlerUsersService } from 'src/app/services/creator-users.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  loginForm: FormGroup;
  registerForm: FormGroup;
  switchShowForms: boolean = true;
  isPatient: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private creatorUsers: HandlerUsersService,
    private auth: AuthService
  ) {
    // Inicialización del formulario de login

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required]
    });

    // Inicialización del formulario de registro
    this.registerForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      document_number: ['', Validators.required],
      rol: ['', Validators.required],
      register_email: ['', Validators.required],
      register_pass: ['', Validators.required],
      age: [''],
      mobile: [''],
      relationship: [''],
      place_of_birh: [''],
      address: [''],
      religion: [''],
      rh: [''],
      basic_disaeses: [''],
      drug_allergy: [''],
      medical_treatments: [''],
      emergency_contacts: [''],
      place_of_residence: [''],
      organ_donation: [false],
      name_father: [''],
      name_mother: [''],
      parental_occupation: [''],
      family_history: ['']
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Datos de Login:', loginData);
      // Lógica para autenticación

      let isLogged = this.auth.initLogin(loginData);

      console.log('onLogin', isLogged);
      if (isLogged) {
        this.router.navigate(['/dashboard']);
      }
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      console.log('Datos de Registro:', registerData);
      // Lógica para registro

      const user = {
        first_name: registerData.first_name,
        last_name: registerData.last_name,
        document_number: registerData.document_number,
        role: registerData.rol,
        data_auth: {
          email: registerData.register_email,
          password: registerData.register_pass,
        }
      }

      const data_role = {
        age: registerData.age,
        mobile: registerData.mobile,
        relationship: registerData.relationship,
        place_of_birth: registerData.place_of_birh,
        address: registerData.address,
        religion: registerData.religion,
        rh: registerData.rh,
        basic_diseases: registerData.basic_disaeses,
        drug_allergy: registerData.drug_allergy,
        medical_treatments: registerData.medical_treatments,
        emergency_contacts: registerData.emergency_contacts,
        place_of_residence: registerData.place_of_residence,
        organ_donation: registerData.organ_donation,
        name_father: registerData.name_father,
        name_mother: registerData.name_mother,
        parental_occupation: registerData.parental_occupation,
        family_history: registerData.family_history,
      }

      let response = this.creatorUsers.createUser(user, data_role, registerData.rol);
      console.log('onRegister', response);
    }
  }

  onRoleChange() {
    this.isPatient = this.registerForm.get('rol')?.value === 'pacient';
    console.log('onRoleChange', this.isPatient);

    this.handlerPatientFields( this.isPatient );
  }

  handlerPatientFields(status: boolean) {
    let fields = [
      'age', 'mobile', 'relationship', 'place_of_birh',
      'address', 'religion', 'rh', 'emergency_contacts',
      'place_of_residence', 'name_father', 'name_mother', 'parental_occupation'
    ]
    
    fields.forEach(field => {

      if (status) {
        this.registerForm.get(field)?.setValidators(Validators.required);
      }

      if (!status) {
        this.registerForm.get(field)?.clearValidators();
        this.registerForm.get(field)?.updateValueAndValidity();
      }

    });
  }

  handlerShowModal(value: boolean) {
    this.switchShowForms = value;
  }

}
