function hex(x) {
	return ("0" + parseInt(x).toString(16)).slice(-2);
}

function rgbToHex(rgb) {
	if (!rgb)
        return '#FFFFFF'; //default color
	
    var hex_rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/); 
    
    if (hex_rgb)
        return "#" + hex(hex_rgb[1]) + hex(hex_rgb[2]) + hex(hex_rgb[3]);
    else
        return rgb;
}

function speaker_mouseover(div, id) {
	img_src = $(div).find('.speaker_pic').find('img.pic').attr('src');
	if(img_src.indexOf('_over') > 0)
		return;
	
	img_over = img_src.split('.')[0] + '_over.png';
	$(div).find('.speaker_pic').find('img.pic').attr('src', img_over);
	$(div).find('.speaker_name').css('color', '#F5714D');
}

function speaker_mouseout(div, id) {
	if($('#active' + id).css('display') != 'none')
		return;

	$(div).find('.speaker_name').css('color', '#AB513F');

	img_src = $(div).find('.speaker_pic').find('img.pic').attr('src');	
	if(img_src.indexOf('_over') < 0)
		return;
	img_out = img_src.substring(0, img_src.length - 9) + '.png';
	$(div).find('.speaker_pic').find('img.pic').attr('src', img_out);
}
