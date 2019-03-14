import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    loginForm: FormGroup;
    @ViewChild('usernameInput') usernameInput: ElementRef<HTMLInputElement>;

    constructor(
        private _fb: FormBuilder, 
        private _authService: AuthService,
        private _router: Router,
        private _platformDetector: PlatformDetectorService) {}

    ngOnInit(): void {
        this.loginForm = this._fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        }); 
    }

    login() {
        const { username, password } = this.loginForm.getRawValue();

        this._authService
            .authenticate(username, password)
            .subscribe(
                () => this._router.navigate(['user', username]),
                err => {
                    this.loginForm.reset();
                    if (this._platformDetector.isPlatformABrowser())
                        this.usernameInput.nativeElement.focus();

                    alert('Dados Invalidos')
                }
            )
    }
}