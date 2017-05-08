import { Component } from '@angular/core';

@Component({
	moduleId:module.id,
	selector: 'jumbotron',
	templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent {
	private jbtHeading:string;
	private jbtText:string;
	private jbtBtnText:string;
	private jbtBtnUrl:string;
	
	constructor(){
		this.jbtHeading="Hell World!";
		this.jbtText="This is Ramesh Ram here";
		this.jbtBtnText="Read More";
		this.jbtBtnUrl="/about";		
 	}	
 }
