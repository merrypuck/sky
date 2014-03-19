
	// Container for all page elements
	// In no specific order
	allElements = [];



	// Each position in layer1SpecialTags is correlated 
	// with element in same position in layer1
	layer1SpecialTags = [];

	layer1 = [];
	layer2 = [];
	layer3 = [];
	layer4 = [];
	layer5 = [];
	layer6 = [];
	layer7 = [];
	layer8 = [];
	layer9 = [];
	layer10 = [];


	/********** Parent Dictionary ***********/

	parents = {};
	significantParents = {};

	/**************** Globals ****************/
	body = document.body;
	bodyDimensions = body.getBoundingClientRect();
	bodyWith = bodyDimensions.width;
	bodyHeight = bodyDimensions.height;

	serializer = new XMLSerializer();

	var meta = document.createElement('meta');
	meta.name = 'viewport';
	meta.content = 'width=device-width, initial-scale=1.0';
	document.getElementsByTagName('head')[0].appendChild(meta);

	/*************** Skeleton style sheets **********/
	/*
	head = document.querySelector('head');
	var style1 = document.createElement('link');
	var style2 = document.createElement('link');
	var style3 = document.createElement('link');

    style1.rel  = 'stylesheet';
    style2.rel = 'stylesheet';
    style3.rel = 'stylesheet';
    style1.type = 'text/css';
    style2.type = 'text/css';
    style3.type = 'text/css';

    style1.href = 'https://raw.github.com/dhg/Skeleton/master/stylesheets/base.css';
    style2.href = 'https://raw.github.com/dhg/Skeleton/master/stylesheets/layout.css';
    style3.href = 'https://raw.github.com/dhg/Skeleton/master/stylesheets/skeleton.css'

    head.appendChild(style1);
    head.appendChild(style2);
    head.appendChild(style3);
    */
    /*
	head.appendChild('<link rel=\'stylesheet\' type=\'text/css\' href=\'https://raw.github.com/dhg/Skeleton/master/stylesheets/base.css\'>');
	head.appendChild('<link rel=\'stylesheet\' type=\'text/css\' href=\'https://raw.github.com/dhg/Skeleton/master/stylesheets/layout.css\'>');
	head.appendChild('<link rel=\'stylesheet\' type=\'text/css\' href=\'https://raw.github.com/dhg/Skeleton/master/stylesheets/skeleton.css\'>');
	*/
	// Finds and goes through every element on page
	// Appends every element to allElements lists
	findEveryElement = function(element) {
		try {
			var childrenArray = findChildren(element);
			if( childrenArray.length !== 0 ) {
				for(var i in childrenArray) {
					if(childrenArray[i] != undefined) {
						allElements.push(childrenArray[i]['element']);
						findEveryElement(childrenArray[i]['element']);
					}
				}
			}
		}
		catch(err) {
			console.log(err);
		}
		
	};

	getLayer1 = function(element) {
		var stringElement = elementToString(element);
		significantParents[stringElement] = [];
		var elementDimensions = element.getBoundingClientRect();
		var childrenArray = findChildren(element);

		if(childrenArray.length > 0) {
			for(var i in childrenArray) {

				if(childrenArray[i]['element'].getBoundingClientRect() != undefined) {

					var childDimensions = childrenArray[i]['element'].getBoundingClientRect();

					if(childDimensions.width === 0 || childDimensions.height === 0) {
						getLayer1(childrenArray[i]['element']);
					}
					else if(childDimensions.width < 6 && childDimensions.height < 6) {
						getLayer1(childrenArray[i]['element']);
					}
					else if(childDimensions.width < elementDimensions.width || childDimensions.height < elementDimensions.height) {

						layer1.push(childrenArray[i]['element']);
						significantParents[stringElement].push(childrenArray[i]['element']);
						getLayer2(childrenArray[i]['element']);
					}
					else {
						//uselessWrapperStyling(element.parentNode);
						getLayer1(childrenArray[i]['element']);
					}
				}
				else {
					continue;
				}
			}
		}

	}

	getLayer2 = function(element) {
		stringElement = element.toString();
		significantParents[stringElement] = [];
		var elementDimensions = element.getBoundingClientRect();
		var childrenArray = findChildren(element);

		if(childrenArray.length > 0) {
			for(var i in childrenArray) {

				if(childrenArray[i]['element'].getBoundingClientRect() != undefined) {

					var childDimensions = childrenArray[i]['element'].getBoundingClientRect();

					if(childDimensions.width === 0 || childDimensions.height === 0) {
						continue;
					}
					else if(childDimensions.width < elementDimensions.width || childDimensions.height < elementDimensions.height) {
						//console.log('layer 2 : ' + JSON.stringify(childrenArray[i]));

						layer2.push(childrenArray[i]['element']);
						significantParents[stringElement].push(childrenArray[i]['element']);

						getLayer3(childrenArray[i]['element']);
					}
					else {
						getLayer2(childrenArray[i]['element']);
					}
				}
				else {
					continue;
				}
			}
		}

	};

	getLayer3 = function(element) {

		var elementDimensions = element.getBoundingClientRect();
		var childrenArray = findChildren(element);
		significantParents[stringElement] = [];

		if(childrenArray.length > 0) {
			for(var i in childrenArray) {

				if(childrenArray[i]['element'].getBoundingClientRect() != undefined) {

					var childDimensions = childrenArray[i]['element'].getBoundingClientRect();

					if(childDimensions.width === 0 || childDimensions.height === 0) {
						continue;
					}
					else if(childDimensions.width < elementDimensions.width || childDimensions.height < elementDimensions.height) {
						//console.log('layer 2 : ' + JSON.stringify(childrenArray[i]));

						layer3.push(childrenArray[i]['element']);
						significantParents[stringElement].push(childrenArray[i]['element']);

						getLayer4(childrenArray[i]['element']);
						
					}
					else {
						getLayer3(childrenArray[i]['element']);
					}
				}
				else {
					continue;
				}
			}
		}

	};

	getLayer4 = function(element) {
		var elementDimensions = element.getBoundingClientRect();
		var childrenArray = findChildren(element);
		significantParents[stringElement] = [];

		if(childrenArray.length > 0) {
			for(var i in childrenArray) {

				if(childrenArray[i]['element'].getBoundingClientRect() != undefined) {

					var childDimensions = childrenArray[i]['element'].getBoundingClientRect();

					if(childDimensions.width === 0 || childDimensions.height === 0) {
						continue;
					}
					else if(childDimensions.width < elementDimensions.width || childDimensions.height < elementDimensions.height) {
						//console.log('layer 2 : ' + JSON.stringify(childrenArray[i]));

						layer4.push(childrenArray[i]['element']);
						significantParents[stringElement].push(childrenArray[i]['element']);
						getLayer5(childrenArray[i]['element']);
						
					}
					else {
						getLayer4(childrenArray[i]['element']);
					}
				}
				else {
					continue;
				}
			}
		}

	};

	getLayer5 = function(element) {
		var elementDimensions = element.getBoundingClientRect();
		var childrenArray = findChildren(element);
		significantParents[stringElement] = [];

		if(childrenArray.length > 0) {
			for(var i in childrenArray) {

				if(childrenArray[i]['element'].getBoundingClientRect() != undefined) {

					var childDimensions = childrenArray[i]['element'].getBoundingClientRect();

					if(childDimensions.width === 0 || childDimensions.height === 0) {
						continue;
					}
					else if(childDimensions.width < elementDimensions.width || childDimensions.height < elementDimensions.height) {
						//console.log('layer 2 : ' + JSON.stringify(childrenArray[i]));

						layer5.push(childrenArray[i]['element']);
						significantParents[stringElement].push(childrenArray[i]['element']);
						getLayer6(childrenArray[i]['element']);
						
					}
					else {
						getLayer5(childrenArray[i]['element']);
					}
				}
				else {
					continue;
				}
			}
		}

	};

	getLayer6 = function(element) {
		var elementDimensions = element.getBoundingClientRect();
		var childrenArray = findChildren(element);
		significantParents[stringElement] = [];

		if(childrenArray.length > 0) {
			for(var i in childrenArray) {

				if(childrenArray[i]['element'].getBoundingClientRect() != undefined) {

					var childDimensions = childrenArray[i]['element'].getBoundingClientRect();

					if(childDimensions.width === 0 || childDimensions.height === 0) {
						continue;
					}
					else if(childDimensions.width < elementDimensions.width || childDimensions.height < elementDimensions.height) {
						//console.log('layer 2 : ' + JSON.stringify(childrenArray[i]));

						layer6.push(childrenArray[i]['element']);
						significantParents[stringElement].push(childrenArray[i]['element']);
						getLayer7(childrenArray[i]['element']);
						
					}
					else {
						getLayer6(childrenArray[i]['element']);
					}
				}
				else {
					continue;
				}
			}
		}

	};

	getLayer7 = function(element) {
		var elementDimensions = element.getBoundingClientRect();
		var childrenArray = findChildren(element);
		significantParents[stringElement] = [];

		if(childrenArray.length > 0) {
			for(var i in childrenArray) {

				if(childrenArray[i]['element'].getBoundingClientRect() != undefined) {

					var childDimensions = childrenArray[i]['element'].getBoundingClientRect();

					if(childDimensions.width === 0 || childDimensions.height === 0) {
						continue;
					}
					else if(childDimensions.width < elementDimensions.width || childDimensions.height < elementDimensions.height) {
						//console.log('layer 2 : ' + JSON.stringify(childrenArray[i]));

						layer7.push(childrenArray[i]['element']);
						significantParents[stringElement].push(childrenArray[i]['element']);
						getLayer8(childrenArray[i]['element']);
						
					}
					else {
						getLayer7(childrenArray[i]['element']);
					}
				}
				else {
					continue;
				}
			}
		}

	};

	getLayer8 = function(element) {
		var elementDimensions = element.getBoundingClientRect();
		var childrenArray = findChildren(element);
		significantParents[stringElement] = [];

		if(childrenArray.length > 0) {
			for(var i in childrenArray) {

				if(childrenArray[i]['element'].getBoundingClientRect() != undefined) {

					var childDimensions = childrenArray[i]['element'].getBoundingClientRect();

					if(childDimensions.width === 0 || childDimensions.height === 0) {
						continue;
					}
					else if(childDimensions.width < elementDimensions.width || childDimensions.height < elementDimensions.height) {
						//console.log('layer 2 : ' + JSON.stringify(childrenArray[i]));

						layer8.push(childrenArray[i]['element']);
						significantParents[stringElement].push(childrenArray[i]['element']);
						getLayer9(childrenArray[i]['element']);
						
					}
					else {
						getLayer8(childrenArray[i]['element']);
					}
				}
				else {
					continue;
				}
			}
		}

	};

	getLayer9 = function(element) {
		var elementDimensions = element.getBoundingClientRect();
		var childrenArray = findChildren(element);

		if(childrenArray.length > 0) {
			for(var i in childrenArray) {

				if(childrenArray[i]['element'].getBoundingClientRect() != undefined) {

					var childDimensions = childrenArray[i]['element'].getBoundingClientRect();

					if(childDimensions.width === 0 || childDimensions.height === 0) {
						continue;
					}
					else if(childDimensions.width < elementDimensions.width || childDimensions.height < elementDimensions.height) {
						//console.log('layer 2 : ' + JSON.stringify(childrenArray[i]));

						layer9.push(childrenArray[i]['element']);
						getLayer10(childrenArray[i]['element']);
						
					}
					else {
						getLayer9(childrenArray[i]['element']);
					}
				}
				else {
					continue;
				}
			}
		}

	};

	getLayer10 = function(element) {
		var elementDimensions = element.getBoundingClientRect();
		var childrenArray = findChildren(element);

		if(childrenArray.length > 0) {
			for(var i in childrenArray) {

				if(childrenArray[i]['element'].getBoundingClientRect() != undefined) {

					var childDimensions = childrenArray[i]['element'].getBoundingClientRect();

					if(childDimensions.width === 0 || childDimensions.height === 0) {
						continue;
					}
					else if(childDimensions.width < elementDimensions.width || childDimensions.height < elementDimensions.height) {
						//console.log('layer 2 : ' + JSON.stringify(childrenArray[i]));

						layer10.push(childrenArray[i]['element']);

					}
					else {
						getLayer10(childrenArray[i]['element']);
					}
				}
				else {
					continue;
				}
			}
		}

	};

/**************** Utility Functios ********************/

// Every child is put into an object with the child element, id, classes, and tag name

// {'element' : <body>...</body>, 'tag': 'body', 'id' : 'randomId', 'classes':'randomClass'}

findChildren = function(element) {

	var children = element.children;
	var allChildren = [];

	if(children.length != undefined) {
		for(i in children) {
			if(children[i].tagName != '' && children[i].tagName != 'SCRIPT' && children[i] != undefined && children[i].tagName != undefined && children[i].tagName != 'OBJECT'){
				childObject = {};
				
				childObject['element'] = children[i];

				childObject['tag'] = children[i].tagName;

				if(children[i].id != '' && children[i].id != undefined) {
					childObject['id'] = children[i].id;
				}
				if(children[i].className != '' && children[i].className != undefined) {
					childObject['classes'] = children[i].className;
				}
				
				allChildren.push(childObject);
			}
			
			
		} 
		return(allChildren);
	}
	else {
		return([]);
	}
};

// Removes all inline
removeStyle = function(element, removedStyle) {
	if (element.style.removeProperty) {
	   		element.style.removeProperty(removedStyle);
		} else {
		    element.style.removeAttribute(removedStyle);
		}
}

removeAttr = function(element, removedAttr) {
	element.removeAttribute(removedAttr);
}

removeStyling = function(element, removedStyle) {
	removeStyle(element, removedStyle);
	removeAttr(element, removedStyle);
}

// Returns value of style property of element
// If property value is in px just returns the amount

getStyleValue = function(element, property) {
	var elementStyles = window.getComputedStyle(element);
	if(elementStyles.getPropertyValue(property) !== null) {
		if(elementStyles.getPropertyValue(property).substring(-2) === 'px') {
			return elementStyles.getPropertyValue(property).substring(0, -2);
		}
		else {
			return elementStyles.getPropertyValue(property);
		}
	}
	else {
		return null;
	}
	
}

function elementToString(element) {
	return serializer.serializeToString(element);
}

// Utility function for headless browser 
// Turns all links into 
/*

//Experiment

// Error in else function with string

addStyle = function(element, addedStyle, amount) {
	removeStyle(element, addedStyle);
	removeAttr(element, addedStyle);

	if(addedStyle === 'background-color') {
		element.style.backgroundColor = amount;
	}
	else if(addedStyle === 'margin-top') {
		element.style.marginTop = amount;
	}
	else if(addedStyle === 'margin-bottom') {
		element.style.marginBottom = amount;
	}
	else if(addedStyle === 'margin-left') {
		element.style.marginLeft = amount;
	}
	else if(addedStyle === 'margin-right') {
		element.style.marginRight = amount;
	}
	else if(addedStyle === 'padding-top') {
		element.style.paddingTop = amount;
	}
	else if(addedStyle === 'padding-left') {
		element.style.paddingLeft = amount;
	}
	else if(addedStyle === 'padding-right') {
		element.style.paddingRight = amount;
	}
	else if(addedStyle === 'padding-bottom') {
		element.style.paddingBottom = amount;
	}
	else {
		console.log('else met' );
		console.log('element : ' + element);
		console.log('added style : ' + addedStyle);
		console.log('amount : ' + amount);
		element.style.addedStyle = amount;
	}

}
*/

/*
// Experiment, function in alpha
getLayer1Tags = function(element, position) {
	var childrenArray = findChildren(element);
	if(childrenArray.length > 0) {
		for(var i in childrenArray) {
			if(childrenArray[i]['tag'] != 'SCRIPT' &&
			   childrenArray[i]['tag'] != 'NOSCRIPT' &&
			   childrenArray[i]['tag'] != 'LINK' &&
			   childrenArray[i]['tag'] != 'SPAN' &&
			   childrenArray[i]['tag'] != 'DIV' &&
			   childrenArray[i]['tag'] != 'BODY' &&
			   childrenArray[i]['tag'] != 'P' &&
			   childrenArray[i]['tag'] != 'BR' &&
			   ) {
				specialTags = specialTags + 1;
			}
			findSpecialTags(childrenArray[i]['element']);
		}
	}
}
*/

/**************** Styling Functions ******************/

initStyling = function() {

	removeStyling(body, 'margin');
	body.style.margin = '0';

	removeStyling(body, 'minWidth');
	body.style.minWidth = '0';

	removeStyling(body, 'width');
	body.style.width = '100%';

	
}

// layer 1 Significant dom wrapper 
layer1Styling = function(element) {

	//element.className = element.className + ' row';

	element.style.margin = '0';
	element.style.padding = '0';
	element.style.float = 'left';
	element.style.width = '100%';

	if(getStyleValue(element, 'position') === 'fixed') {

		element.style.position = 'relative';
	}

}
layer2Styling = function(element) {
	var elementDimensions = element.getBoundingClientRect();
	var parentDimensions = element.parentNode.getBoundingClientRect();
	if(elementDimensions.width > parentDimensions.width * .75) {
		element.style.width = '100%';
	}
};

layer3Styling = function(element) {
	var elementDimensions = element.getBoundingClientRect();
	var parentDimensions = element.parentNode.getBoundingClientRect();
	if(elementDimensions.width > parentDimensions.width * .75) {
		element.style.width = '100%';
	}
}
layer3Styling = function(element) {
	var elementDimensions = element.getBoundingClientRect();
	var parentDimensions = element.parentNode.getBoundingClientRect();
	if(elementDimensions.width > parentDimensions.width * .75) {
		element.style.width = '100%';
	}
}
layer4Styling = function(element) {
	var elementDimensions = element.getBoundingClientRect();
	var parentDimensions = element.parentNode.getBoundingClientRect();
	if(elementDimensions.width > parentDimensions.width * .75) {
		element.style.width = '100%';
	}
}
layer5Styling = function(element) {
	var elementDimensions = element.getBoundingClientRect();
	var parentDimensions = element.parentNode.getBoundingClientRect();
	if(elementDimensions.width > parentDimensions.width * .75) {
		element.style.width = '100%';
	}
}
layer6Styling = function(element) {
	var elementDimensions = element.getBoundingClientRect();
	var parentDimensions = element.parentNode.getBoundingClientRect();
	if(elementDimensions.width > parentDimensions.width * .75) {
		element.style.width = '100%';
	}
}
layer7Styling = function(element) {
	var elementDimensions = element.getBoundingClientRect();
	var parentDimensions = element.parentNode.getBoundingClientRect();
	if(elementDimensions.width > parentDimensions.width * .75) {
		element.style.width = '100%';
	}
}
layer8Styling = function(element) {
	var elementDimensions = element.getBoundingClientRect();
	var parentDimensions = element.parentNode.getBoundingClientRect();
	if(elementDimensions.width > parentDimensions.width * .75) {
		element.style.width = '100%';
	}
}
layer9Styling = function(element) {
	var elementDimensions = element.getBoundingClientRect();
	var parentDimensions = element.parentNode.getBoundingClientRect();
	if(elementDimensions.width > parentDimensions.width * .75) {
		element.style.width = '100%';
	}
}
layer10Styling = function(element) {
	var elementDimensions = element.getBoundingClientRect();
	var parentDimensions = element.parentNode.getBoundingClientRect();
	if(elementDimensions.width > parentDimensions.width * .75) {
		element.style.width = '100%';
	}
}

uselessWrapperStyling = function(element) {
	removeStyling(element, 'width');
	element.style.width = '100%';
}
// Renders universal styling
allStyling = function(element) {
	var elementDimensions = element.getBoundingClientRect();
	if(elementDimensions.width >= bodyDimensions.width * .75) {
		removeStyling(element, 'width');
		element.style.width = '100%';
	}
	/*
	if(element.tagName === 'LI') {
		removeStyling(element, 'display');
		element.style.display = 'block';

		removeStyling(element, 'width');
		element.style.textAlign = '100%';

		removeStyling(element, 'marginLeft');
		element.style.marginLeft = 'auto';

		removeStyling(element, 'marginRight');
		element.style.marginRight = 'auto';		

		removeStyling(element, 'textAlign');
		element.style.textAlign = 'center';		
	}
	if(element.tagName === 'TD') {
		removeStyling(element, 'display');
		element.style.display = 'block';

		removeStyling(element, 'width');
		element.style.textAlign = '100%';

		removeStyling(element, 'marginLeft');
		element.style.marginLeft = 'auto';

		removeStyling(element, 'marginRight');
		element.style.marginRight = 'auto';		

		removeStyling(element, 'textAlign');
		element.style.textAlign = 'center';		
	}
	*/
	
}

// Image styling
imageStyling = function(element) {
	var elementDimensions = element.getBoundingClientRect();
	if(elementDimensions.width >= bodyWith * .8) {
		
		removeStyling(element, 'width');
		element.style.width = '100%';

		removeStyling(element, 'display');
		element.style.display = 'block';
		
		removeStyling(element, 'textAlign');
		element.style.textAlign = 'center';

		removeStyling(element, 'marginLeft');
		element.style.marginLeft = 'auto';
		
		removeStyling(element, 'marginRight');
		element.style.marginRight = 'auto';
		
		
	}
	else if(elementDimensions.width >= bodyWith * .5) {
		removeStyling(element, 'display');
		element.style.display = 'block';
		
		removeStyling(element, 'textAlign')
		element.style.textAlign = 'center';
		
		removeStyling(element, 'marginLeft');
		element.style.marginLeft = 'auto';
		
		removeStyling(element, 'marginRight');
		element.style.marginRight = 'auto';

	}
}

linkStyling = function(element) {
	var elementDimensions = element.getBoundingClientRect();
	
}

listStyling = function(element) {
	var elementDimensions = element.getBoundingClientRect();

	
}



/***************** Data Collection ************************/

totalClickableItems = 0;
findTotalClickable = function(element) {
	var childrenArray = findChildren(element);
	if(childrenArray.length > 0) {
		for(i in childrenArray) {
			if(childrenArray[i]['tag'] === 'A') {
				totalClickableItems = totalClickableItems + 1;
				
			}
		findTotalClickable(childrenArray[i]['element']);

		}
	}
};


findTotalClickable(document.body);


/******************  Render Functions **********************/

executeStyling = function() {

	for(var i in allElements) {
		if(allElements[i].style !== undefined) {
			try {


			var elementDimensions = allElements[i].getBoundingClientRect();

			removeStyling(allElements[i], 'left');
			allElements[i].style.float = 'left';
			removeStyling(allElements[i], 'position');
			allElements[i].style.position = 'relative';
			removeStyling(allElements[i], 'padding');
			allElements[i].style.padding = '0';
			removeStyling(allElements[i], 'margin');
			allElements[i].style.margin = '0 auto';
			removeStyling(allElements[i], 'top');
			allElements[i].style.top = '0';
			removeStyling(allElements[i], 'left');
			allElements[i].style.left = '0';
			removeStyling(allElements[i], 'textAlign');
			allElements[i].style.textAlign = 'center';

			removeStyling(allElements[i], 'minWidth');
			allElements[i].style.minWidth = '0';

			removeStyling(allElements[i], 'maxWidth');
			allElements[i].style.maxWidth = 'none';
			
			if(allElements[i].tagName !== 'IMG' && getStyleValue(allElements[i], 'background-image') === 'none' && allElements[i].tagName !== 'TR' && allElements[i].tagName !== 'BUTTON') {
				removeStyling(allElements[i], 'width');
				allElements[i].style.width = '100% !important';
			}
			else if(allElements[i].tagName === 'BUTTON') {
				if(elementDimensions.width > parentDimensions.width * .75) {
					allElements[i].width = '100% !important';
				}
			}
			else if(allElements[i].tagName === 'IMG') {
				imageStyling(allElements[i]);
			}
			else if(allElements[i].tagName === 'TR') {
				var parentDimensions = allElements[i].parentNode.getBoundingClientRect();
				// elementDimensions.width > bodyDimensions.width * 
				if(elementDimensions.height > parentDimensions * 8) {
					allElements[i].width = '100% !important';
				}
			}

			if(allElements[i].tagName === 'LI') {

			}
			/*
			allElements[i].style.float = 'left';
			
			allElements[i].style.padding = '0';
			allElements[i].style.position = 'relative';
			allElements[i].style.top = '0';
			allElements[i].style.left = '0';
			allElements[i].style.minWidth = '0'
			//allElements[i].style.maxWidth = '0'

			if(allElements[i].tagName === 'IMG') {
				imageStyling(allElements[i]);
			}
			else if(allElements[i].tagName === 'A') {
				if(getStyleValue(allElements[i], 'background-image') != 'none') {
					imageStyling(allElements[i]);
				}
				// linkStyling(allElements[i]);
			} 
			else if(allElements[i].tagName === 'LI') {
				if(getStyleValue(allElements[i], 'background-image') != 'none') {
					imageStyling(allElements[i]);
				}
				listStyling(allElements[i]);
			}
			else {
				if(getStyleValue(allElements[i], 'background-image') === 'none') {
					allElements[i].style.width = '100%';
					allElements[i].style.margin = '0 auto';
				}
				else {
					imageStyling(allElements[i]);
				}
				
			}
				
			
			

			if(allElements[i].tagName === 'INPUT') {

			}
			else {
				allElements[i].style.textAlign = 'center';
			}

			
			
			
			*/
			}
			catch(err) {
				console.log('err : ' + err);
				console.log('element : ' + allElements[i].tagName);
			}
		}

	}


	for(var i in layer1) {
		layer1Styling(layer1[i]);
	}
	for(var i in layer2) {
		layer2Styling(layer2[i]);
	}
	for(var i in layer3) {
		layer3Styling(layer3[i]);
	}
	for(var i in layer4) {
		layer4Styling(layer4[i]);
	}
	for(var i in layer5) {
		layer5Styling(layer5[i]);
	}
	for(var i in layer6) {
		layer6Styling(layer6[i]);
	}
	for(var i in layer7) {
		layer7Styling(layer7[i]);
	}
	for(var i in layer8) {
		layer8Styling(layer8[i]);
	}
	for(var i in layer9) {
		layer9Styling(layer9[i]);
	}
	for(var i in layer10) {
		layer10Styling(layer10[i]);
	}


	

};

// Initialize page styling
initStyling();

// Finds every element and adds them to allElements array
findEveryElement(body);

// Get most signinificant content wrappers
getLayer1(body);
// Executes styling
executeStyling();



/*********** Notes ***********
	
	Key is looking at height


*/


