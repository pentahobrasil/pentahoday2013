function confirmarExclusao() {
	return confirm("Deseja realmente excluir os dados?");
}

function txtBoxFormat (objForm, strField, sMask, evtKeyPress)
{
	var i, nCount, sValue, fldLen, mskLen,bolMask, sCod, nTecla;
	
	if(document.all) nTecla = evtKeyPress.keyCode;
	else if(document.layers) nTecla = evtKeyPress.which;
	else nTecla = evtKeyPress.which;
	
	sValue = objForm[strField].value;
	
	sValue = sValue.toString().replace( "-", "" );
	sValue = sValue.toString().replace( "-", "" );
	sValue = sValue.toString().replace( ".", "" );
	sValue = sValue.toString().replace( ".", "" );
	sValue = sValue.toString().replace( "/", "" );
	sValue = sValue.toString().replace( "/", "" );
	sValue = sValue.toString().replace( "(", "" );
	sValue = sValue.toString().replace( "(", "" );
	sValue = sValue.toString().replace( ")", "" );
	sValue = sValue.toString().replace( ")", "" );
	sValue = sValue.toString().replace( " ", "" );
	sValue = sValue.toString().replace( " ", "" );
	fldLen = sValue.length;
	mskLen = sMask.length;
	
	i			= 0;
	nCount	= 0;
	sCod		= "";
	mskLen	= fldLen;
	
	while (i <= mskLen)
	{
		bolMask = ((sMask.charAt(i) == "-") || (sMask.charAt(i) == ".") || (sMask.charAt(i) == "/"))
		bolMask = bolMask || ((sMask.charAt(i) == "(") || (sMask.charAt(i) == ")") || (sMask.charAt(i) == " "))
		
		if (bolMask)
		{
			sCod += sMask.charAt(i);
			mskLen++;
		}
		else
		{
			sCod += sValue.charAt(nCount);
			nCount++;
		}
		
		i++;
	}

	objForm[strField].value = sCod;
	
	if (nTecla != 8)
	{
		if (sMask.charAt(i-1) == "9") return ((nTecla > 47) && (nTecla < 58));
		else return true;
	}
	else return true;
}

function currencyFormat (fld, milSep, decSep, e)
{
	var sep			= 0;
	var key			= '';
	var i			= j = 0;
	var len			= len2 = 0;
	var strCheck	= '0123456789';
	var aux			= aux2 = '';
	var whichCode	= (window.Event) ? e.which : e.keyCode;
	if (whichCode == 13) return true;
	if (whichCode == 8) return true;
	
	key = String.fromCharCode(whichCode);
	if (strCheck.indexOf(key) == -1) return false;
	len = fld.value.length;
	
	for(i = 0; i < len; i++) if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != decSep)) break;
	aux = '';
	
	for(; i < len; i++) if (strCheck.indexOf(fld.value.charAt(i))!=-1) aux += fld.value.charAt(i);
	aux += key;
	len = aux.length;
	
	if (len == 0) fld.value = '';
	if (len == 1) fld.value = '0'+ decSep + '0' + aux;
	if (len == 2) fld.value = '0'+ decSep + aux;
	if (len > 2)
	{
		aux2 = '';
		for (j = 0, i = len - 3; i >= 0; i--)
		{
			if (j == 3)
			{
				aux2 += milSep;
				j = 0;
			}
			aux2 += aux.charAt(i);
			j++;
		}
		fld.value = '';
		len2 = aux2.length;
		
		for (i = len2 - 1; i >= 0; i--) fld.value += aux2.charAt(i);
		fld.value += decSep + aux.substr(len - 2, len);
	}
	return false;
}

function aoClicarInput(inputText, valorDefault) {
	if(inputText.value == valorDefault) inputText.value = "";
}

function aoSairInput(inputText, valorDefault) {
	if(inputText.value == "") inputText.value = valorDefault;
}