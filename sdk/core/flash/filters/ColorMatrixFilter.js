/*class flash.filters.ColorMatrixFilter*/
(function ()
{
	"use strict";
	
	var d = {};
	
	
	/*public*/
	d.get_matrix = function ()/*Array*/
	{
		
	};
	
	/*public*/
	d.set_matrix = function (value/*Array*/)/*void*/
	{
		
	};
	
	
	/*public*/
	d.ColorMatrixFilter = function (matrix/*Array*/)
	{
		this.BitmapFilter_constructor();
		if (matrix == undefined) matrix = null;
		
		
		if (matrix != null)
		{
			this.set_matrix(matrix);
			
		}
		return;
		
	};
	
	/*override*/
	/*public*/
	d.clone = function ()/*BitmapFilter*/
	{
		return new flash.filters.ColorMatrixFilter(this.get_matrix());
		
	};
	
	var s = {};
	
	s.__init__ = function ()
	{
		/*super*/
		/*public*/
		this.prototype.BitmapFilter_constructor = this.__base__;
	};
	
	
	flash.addDescription("flash.filters.ColorMatrixFilter", d, "flash.filters.BitmapFilter", s, null);
	
}
());
