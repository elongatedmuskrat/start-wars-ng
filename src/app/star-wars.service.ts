import { Injectable } from '@angular/core';

import { LogService } from './log.service';

@Injectable()
export class StarWarsService {

	private characters = [
	    { 
	    	name: 'Luke Skywalker', 
	    	side: 'light' 
	    },    
	    { 	name: 'Darth Vader',
	     	side: 'dark'
	    }
  	];
  	private logService: LogService;

  	constructor(logService: LogService){
  		this.logService = logService;
  	}

  	getCharacters(chosenList){
	  	if(chosenList === 'all'){
	  		return this.characters;
	  	}
	    return this.characters.filter((character) => {
	    	return character.side === chosenList;
	    })
  	}

  	onSideAssigned(characterInfo){
	  	const position = this.characters.findIndex((character) => {
	  		return character.name === characterInfo.name;
	  	})

  		this.characters[position].side = characterInfo.side;
  		this.logService.writeLog('Changed side of ' + characterInfo.name + ', new side: ' + characterInfo.side)
  	}

}