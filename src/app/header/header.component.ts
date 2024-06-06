import { Component, OnInit } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.applyTheme();
  }

  show(){
    
    Swal.fire({
      title: 'User Details',
      html: `
      <p> LinkedIn : <a href="https://www.linkedin.com/in/sahajpreet-singh-976a19196/"> Sahaj</a></p>
        <p>Email: sahaj.preetsingh.777@gmail.com</p>
        <p>Phone Number: 7009936073</p>
      `,
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: 'Close',
    });
    

  }

  toggleTheme(): void {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', String(isDarkMode));
  }

  applyTheme(): void {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }
}
