/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:55:29.28
*/
gx.evt.autoSkip = false;
gx.define('hrecolhimentoimpostos', false, function () {
   this.ServerClass =  "hrecolhimentoimpostos" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e11uz2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13uz2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15uz2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e16uz2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e17uz2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e19uz2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,18,21,24,27,30,32,35,37,40,42,44,49,51,53,55,57,59,61,65,67,69,71,73,75,86,88,90,92,94,96,98,102,104,106,108,110,112,121,123,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148];
   this.GXLastCtrlId =148;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABTXT",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV68TxtTela",gxold:"OV68TxtTela",gxvar:"AV68TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV68TxtTela=Value},v2z:function(Value){gx.O.ZV68TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV68TxtTela)},c2v:function(){gx.O.AV68TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"IMAGE2",grid:0};
   GXValidFnc[18]={fld:"IMAGE1",grid:0};
   GXValidFnc[21]={fld:"TABLE7",grid:0};
   GXValidFnc[24]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPPESSOA",gxz:"ZV28TpPessoa",gxold:"OV28TpPessoa",gxvar:"AV28TpPessoa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28TpPessoa=Value},v2z:function(Value){gx.O.ZV28TpPessoa=Value},v2c:function(){gx.fn.setComboBoxValue("vTPPESSOA",gx.O.AV28TpPessoa)},c2v:function(){gx.O.AV28TpPessoa=this.val()},val:function(){return gx.fn.getControlValue("vTPPESSOA")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINICIO",gxz:"ZV29DtInicio",gxold:"OV29DtInicio",gxvar:"AV29DtInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29DtInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29DtInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINICIO",gx.O.AV29DtInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29DtInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINICIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFINAL",gxz:"ZV30DtFinal",gxold:"OV30DtFinal",gxvar:"AV30DtFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30DtFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30DtFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFINAL",gx.O.AV30DtFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV30DtFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[49]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOIRRF1",gxz:"ZV31TpLancmtoIRRF1",gxold:"OV31TpLancmtoIRRF1",gxvar:"AV31TpLancmtoIRRF1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31TpLancmtoIRRF1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31TpLancmtoIRRF1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOIRRF1",gx.O.AV31TpLancmtoIRRF1,0)},c2v:function(){gx.O.AV31TpLancmtoIRRF1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOIRRF1",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOIRRF2",gxz:"ZV32TpLancmtoIRRF2",gxold:"OV32TpLancmtoIRRF2",gxvar:"AV32TpLancmtoIRRF2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32TpLancmtoIRRF2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32TpLancmtoIRRF2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOIRRF2",gx.O.AV32TpLancmtoIRRF2,0)},c2v:function(){gx.O.AV32TpLancmtoIRRF2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOIRRF2",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOIRRF3",gxz:"ZV33TpLancmtoIRRF3",gxold:"OV33TpLancmtoIRRF3",gxvar:"AV33TpLancmtoIRRF3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33TpLancmtoIRRF3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33TpLancmtoIRRF3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOIRRF3",gx.O.AV33TpLancmtoIRRF3,0)},c2v:function(){gx.O.AV33TpLancmtoIRRF3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOIRRF3",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOIRRF4",gxz:"ZV34TpLancmtoIRRF4",gxold:"OV34TpLancmtoIRRF4",gxvar:"AV34TpLancmtoIRRF4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TpLancmtoIRRF4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34TpLancmtoIRRF4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOIRRF4",gx.O.AV34TpLancmtoIRRF4,0)},c2v:function(){gx.O.AV34TpLancmtoIRRF4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOIRRF4",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOIRRF5",gxz:"ZV35TpLancmtoIRRF5",gxold:"OV35TpLancmtoIRRF5",gxvar:"AV35TpLancmtoIRRF5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35TpLancmtoIRRF5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35TpLancmtoIRRF5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOIRRF5",gx.O.AV35TpLancmtoIRRF5,0)},c2v:function(){gx.O.AV35TpLancmtoIRRF5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOIRRF5",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOIRRF6",gxz:"ZV36TpLancmtoIRRF6",gxold:"OV36TpLancmtoIRRF6",gxvar:"AV36TpLancmtoIRRF6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36TpLancmtoIRRF6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36TpLancmtoIRRF6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOIRRF6",gx.O.AV36TpLancmtoIRRF6,0)},c2v:function(){gx.O.AV36TpLancmtoIRRF6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOIRRF6",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOIRRF7",gxz:"ZV37TpLancmtoIRRF7",gxold:"OV37TpLancmtoIRRF7",gxvar:"AV37TpLancmtoIRRF7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TpLancmtoIRRF7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37TpLancmtoIRRF7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOIRRF7",gx.O.AV37TpLancmtoIRRF7,0)},c2v:function(){gx.O.AV37TpLancmtoIRRF7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOIRRF7",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOIRRF8",gxz:"ZV38TpLancmtoIRRF8",gxold:"OV38TpLancmtoIRRF8",gxvar:"AV38TpLancmtoIRRF8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38TpLancmtoIRRF8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38TpLancmtoIRRF8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOIRRF8",gx.O.AV38TpLancmtoIRRF8,0)},c2v:function(){gx.O.AV38TpLancmtoIRRF8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOIRRF8",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOIRRF9",gxz:"ZV39TpLancmtoIRRF9",gxold:"OV39TpLancmtoIRRF9",gxvar:"AV39TpLancmtoIRRF9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39TpLancmtoIRRF9=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV39TpLancmtoIRRF9=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOIRRF9",gx.O.AV39TpLancmtoIRRF9,0)},c2v:function(){gx.O.AV39TpLancmtoIRRF9=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOIRRF9",'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOIRRF10",gxz:"ZV40TpLancmtoIRRF10",gxold:"OV40TpLancmtoIRRF10",gxvar:"AV40TpLancmtoIRRF10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40TpLancmtoIRRF10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40TpLancmtoIRRF10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOIRRF10",gx.O.AV40TpLancmtoIRRF10,0)},c2v:function(){gx.O.AV40TpLancmtoIRRF10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOIRRF10",'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOIRRF11",gxz:"ZV41TpLancmtoIRRF11",gxold:"OV41TpLancmtoIRRF11",gxvar:"AV41TpLancmtoIRRF11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41TpLancmtoIRRF11=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41TpLancmtoIRRF11=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOIRRF11",gx.O.AV41TpLancmtoIRRF11,0)},c2v:function(){gx.O.AV41TpLancmtoIRRF11=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOIRRF11",'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOIRRF12",gxz:"ZV42TpLancmtoIRRF12",gxold:"OV42TpLancmtoIRRF12",gxvar:"AV42TpLancmtoIRRF12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42TpLancmtoIRRF12=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42TpLancmtoIRRF12=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOIRRF12",gx.O.AV42TpLancmtoIRRF12,0)},c2v:function(){gx.O.AV42TpLancmtoIRRF12=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOIRRF12",'.')},nac:gx.falseFn};
   GXValidFnc[86]={fld:"TEXTBLOCK35", format:0,grid:0};
   GXValidFnc[88]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOPIS1",gxz:"ZV45TpLancmtoPIS1",gxold:"OV45TpLancmtoPIS1",gxvar:"AV45TpLancmtoPIS1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45TpLancmtoPIS1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45TpLancmtoPIS1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOPIS1",gx.O.AV45TpLancmtoPIS1,0)},c2v:function(){gx.O.AV45TpLancmtoPIS1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOPIS1",'.')},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOPIS2",gxz:"ZV46TpLancmtoPIS2",gxold:"OV46TpLancmtoPIS2",gxvar:"AV46TpLancmtoPIS2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46TpLancmtoPIS2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46TpLancmtoPIS2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOPIS2",gx.O.AV46TpLancmtoPIS2,0)},c2v:function(){gx.O.AV46TpLancmtoPIS2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOPIS2",'.')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOPIS3",gxz:"ZV47TpLancmtoPIS3",gxold:"OV47TpLancmtoPIS3",gxvar:"AV47TpLancmtoPIS3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47TpLancmtoPIS3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47TpLancmtoPIS3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOPIS3",gx.O.AV47TpLancmtoPIS3,0)},c2v:function(){gx.O.AV47TpLancmtoPIS3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOPIS3",'.')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOPIS4",gxz:"ZV48TpLancmtoPIS4",gxold:"OV48TpLancmtoPIS4",gxvar:"AV48TpLancmtoPIS4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48TpLancmtoPIS4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48TpLancmtoPIS4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOPIS4",gx.O.AV48TpLancmtoPIS4,0)},c2v:function(){gx.O.AV48TpLancmtoPIS4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOPIS4",'.')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOPIS5",gxz:"ZV49TpLancmtoPIS5",gxold:"OV49TpLancmtoPIS5",gxvar:"AV49TpLancmtoPIS5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49TpLancmtoPIS5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49TpLancmtoPIS5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOPIS5",gx.O.AV49TpLancmtoPIS5,0)},c2v:function(){gx.O.AV49TpLancmtoPIS5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOPIS5",'.')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOPIS6",gxz:"ZV50TpLancmtoPIS6",gxold:"OV50TpLancmtoPIS6",gxvar:"AV50TpLancmtoPIS6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50TpLancmtoPIS6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50TpLancmtoPIS6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOPIS6",gx.O.AV50TpLancmtoPIS6,0)},c2v:function(){gx.O.AV50TpLancmtoPIS6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOPIS6",'.')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOPIS7",gxz:"ZV51TpLancmtoPIS7",gxold:"OV51TpLancmtoPIS7",gxvar:"AV51TpLancmtoPIS7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51TpLancmtoPIS7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51TpLancmtoPIS7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOPIS7",gx.O.AV51TpLancmtoPIS7,0)},c2v:function(){gx.O.AV51TpLancmtoPIS7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOPIS7",'.')},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOPIS8",gxz:"ZV52TpLancmtoPIS8",gxold:"OV52TpLancmtoPIS8",gxvar:"AV52TpLancmtoPIS8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52TpLancmtoPIS8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52TpLancmtoPIS8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOPIS8",gx.O.AV52TpLancmtoPIS8,0)},c2v:function(){gx.O.AV52TpLancmtoPIS8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOPIS8",'.')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOPIS9",gxz:"ZV53TpLancmtoPIS9",gxold:"OV53TpLancmtoPIS9",gxvar:"AV53TpLancmtoPIS9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53TpLancmtoPIS9=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53TpLancmtoPIS9=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOPIS9",gx.O.AV53TpLancmtoPIS9,0)},c2v:function(){gx.O.AV53TpLancmtoPIS9=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOPIS9",'.')},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOPIS10",gxz:"ZV54TpLancmtoPIS10",gxold:"OV54TpLancmtoPIS10",gxvar:"AV54TpLancmtoPIS10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54TpLancmtoPIS10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54TpLancmtoPIS10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOPIS10",gx.O.AV54TpLancmtoPIS10,0)},c2v:function(){gx.O.AV54TpLancmtoPIS10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOPIS10",'.')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOPIS11",gxz:"ZV55TpLancmtoPIS11",gxold:"OV55TpLancmtoPIS11",gxvar:"AV55TpLancmtoPIS11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55TpLancmtoPIS11=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV55TpLancmtoPIS11=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOPIS11",gx.O.AV55TpLancmtoPIS11,0)},c2v:function(){gx.O.AV55TpLancmtoPIS11=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOPIS11",'.')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPLANCMTOPIS12",gxz:"ZV56TpLancmtoPIS12",gxold:"OV56TpLancmtoPIS12",gxvar:"AV56TpLancmtoPIS12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56TpLancmtoPIS12=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV56TpLancmtoPIS12=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPLANCMTOPIS12",gx.O.AV56TpLancmtoPIS12,0)},c2v:function(){gx.O.AV56TpLancmtoPIS12=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPLANCMTOPIS12",'.')},nac:gx.falseFn};
   GXValidFnc[121]={fld:"JS", format:2,grid:0};
   GXValidFnc[123]={fld:"BTNHELP",grid:0};
   GXValidFnc[125]={fld:"PROMPT_TPLANCMTOIRRF1",grid:0};
   GXValidFnc[126]={fld:"PROMPT_TPLANCMTOIRRF2",grid:0};
   GXValidFnc[127]={fld:"PROMPT_TPLANCMTOIRRF3",grid:0};
   GXValidFnc[128]={fld:"PROMPT_TPLANCMTOIRRF4",grid:0};
   GXValidFnc[129]={fld:"PROMPT_TPLANCMTOIRRF5",grid:0};
   GXValidFnc[130]={fld:"PROMPT_TPLANCMTOIRRF6",grid:0};
   GXValidFnc[131]={fld:"PROMPT_TPLANCMTOIRRF7",grid:0};
   GXValidFnc[132]={fld:"PROMPT_TPLANCMTOIRRF8",grid:0};
   GXValidFnc[133]={fld:"PROMPT_TPLANCMTOIRRF9",grid:0};
   GXValidFnc[134]={fld:"PROMPT_TPLANCMTOIRRF10",grid:0};
   GXValidFnc[135]={fld:"PROMPT_TPLANCMTOIRRF11",grid:0};
   GXValidFnc[136]={fld:"PROMPT_TPLANCMTOIRRF12",grid:0};
   GXValidFnc[137]={fld:"PROMPT_TPLANCMTOPIS1",grid:0};
   GXValidFnc[138]={fld:"PROMPT_TPLANCMTOPIS2",grid:0};
   GXValidFnc[139]={fld:"PROMPT_TPLANCMTOPIS3",grid:0};
   GXValidFnc[140]={fld:"PROMPT_TPLANCMTOPIS4",grid:0};
   GXValidFnc[141]={fld:"PROMPT_TPLANCMTOPIS5",grid:0};
   GXValidFnc[142]={fld:"PROMPT_TPLANCMTOPIS6",grid:0};
   GXValidFnc[143]={fld:"PROMPT_TPLANCMTOPIS7",grid:0};
   GXValidFnc[144]={fld:"PROMPT_TPLANCMTOPIS8",grid:0};
   GXValidFnc[145]={fld:"PROMPT_TPLANCMTOPIS9",grid:0};
   GXValidFnc[146]={fld:"PROMPT_TPLANCMTOPIS10",grid:0};
   GXValidFnc[147]={fld:"PROMPT_TPLANCMTOPIS11",grid:0};
   GXValidFnc[148]={fld:"PROMPT_TPLANCMTOPIS12",grid:0};
   this.AV68TxtTela = "" ;
   this.ZV68TxtTela = "" ;
   this.OV68TxtTela = "" ;
   this.AV28TpPessoa = "" ;
   this.ZV28TpPessoa = "" ;
   this.OV28TpPessoa = "" ;
   this.AV29DtInicio = gx.date.nullDate() ;
   this.ZV29DtInicio = gx.date.nullDate() ;
   this.OV29DtInicio = gx.date.nullDate() ;
   this.AV30DtFinal = gx.date.nullDate() ;
   this.ZV30DtFinal = gx.date.nullDate() ;
   this.OV30DtFinal = gx.date.nullDate() ;
   this.AV31TpLancmtoIRRF1 = 0 ;
   this.ZV31TpLancmtoIRRF1 = 0 ;
   this.OV31TpLancmtoIRRF1 = 0 ;
   this.AV32TpLancmtoIRRF2 = 0 ;
   this.ZV32TpLancmtoIRRF2 = 0 ;
   this.OV32TpLancmtoIRRF2 = 0 ;
   this.AV33TpLancmtoIRRF3 = 0 ;
   this.ZV33TpLancmtoIRRF3 = 0 ;
   this.OV33TpLancmtoIRRF3 = 0 ;
   this.AV34TpLancmtoIRRF4 = 0 ;
   this.ZV34TpLancmtoIRRF4 = 0 ;
   this.OV34TpLancmtoIRRF4 = 0 ;
   this.AV35TpLancmtoIRRF5 = 0 ;
   this.ZV35TpLancmtoIRRF5 = 0 ;
   this.OV35TpLancmtoIRRF5 = 0 ;
   this.AV36TpLancmtoIRRF6 = 0 ;
   this.ZV36TpLancmtoIRRF6 = 0 ;
   this.OV36TpLancmtoIRRF6 = 0 ;
   this.AV37TpLancmtoIRRF7 = 0 ;
   this.ZV37TpLancmtoIRRF7 = 0 ;
   this.OV37TpLancmtoIRRF7 = 0 ;
   this.AV38TpLancmtoIRRF8 = 0 ;
   this.ZV38TpLancmtoIRRF8 = 0 ;
   this.OV38TpLancmtoIRRF8 = 0 ;
   this.AV39TpLancmtoIRRF9 = 0 ;
   this.ZV39TpLancmtoIRRF9 = 0 ;
   this.OV39TpLancmtoIRRF9 = 0 ;
   this.AV40TpLancmtoIRRF10 = 0 ;
   this.ZV40TpLancmtoIRRF10 = 0 ;
   this.OV40TpLancmtoIRRF10 = 0 ;
   this.AV41TpLancmtoIRRF11 = 0 ;
   this.ZV41TpLancmtoIRRF11 = 0 ;
   this.OV41TpLancmtoIRRF11 = 0 ;
   this.AV42TpLancmtoIRRF12 = 0 ;
   this.ZV42TpLancmtoIRRF12 = 0 ;
   this.OV42TpLancmtoIRRF12 = 0 ;
   this.AV45TpLancmtoPIS1 = 0 ;
   this.ZV45TpLancmtoPIS1 = 0 ;
   this.OV45TpLancmtoPIS1 = 0 ;
   this.AV46TpLancmtoPIS2 = 0 ;
   this.ZV46TpLancmtoPIS2 = 0 ;
   this.OV46TpLancmtoPIS2 = 0 ;
   this.AV47TpLancmtoPIS3 = 0 ;
   this.ZV47TpLancmtoPIS3 = 0 ;
   this.OV47TpLancmtoPIS3 = 0 ;
   this.AV48TpLancmtoPIS4 = 0 ;
   this.ZV48TpLancmtoPIS4 = 0 ;
   this.OV48TpLancmtoPIS4 = 0 ;
   this.AV49TpLancmtoPIS5 = 0 ;
   this.ZV49TpLancmtoPIS5 = 0 ;
   this.OV49TpLancmtoPIS5 = 0 ;
   this.AV50TpLancmtoPIS6 = 0 ;
   this.ZV50TpLancmtoPIS6 = 0 ;
   this.OV50TpLancmtoPIS6 = 0 ;
   this.AV51TpLancmtoPIS7 = 0 ;
   this.ZV51TpLancmtoPIS7 = 0 ;
   this.OV51TpLancmtoPIS7 = 0 ;
   this.AV52TpLancmtoPIS8 = 0 ;
   this.ZV52TpLancmtoPIS8 = 0 ;
   this.OV52TpLancmtoPIS8 = 0 ;
   this.AV53TpLancmtoPIS9 = 0 ;
   this.ZV53TpLancmtoPIS9 = 0 ;
   this.OV53TpLancmtoPIS9 = 0 ;
   this.AV54TpLancmtoPIS10 = 0 ;
   this.ZV54TpLancmtoPIS10 = 0 ;
   this.OV54TpLancmtoPIS10 = 0 ;
   this.AV55TpLancmtoPIS11 = 0 ;
   this.ZV55TpLancmtoPIS11 = 0 ;
   this.OV55TpLancmtoPIS11 = 0 ;
   this.AV56TpLancmtoPIS12 = 0 ;
   this.ZV56TpLancmtoPIS12 = 0 ;
   this.OV56TpLancmtoPIS12 = 0 ;
   this.AV68TxtTela = "" ;
   this.AV28TpPessoa = "" ;
   this.AV29DtInicio = gx.date.nullDate() ;
   this.AV30DtFinal = gx.date.nullDate() ;
   this.AV31TpLancmtoIRRF1 = 0 ;
   this.AV32TpLancmtoIRRF2 = 0 ;
   this.AV33TpLancmtoIRRF3 = 0 ;
   this.AV34TpLancmtoIRRF4 = 0 ;
   this.AV35TpLancmtoIRRF5 = 0 ;
   this.AV36TpLancmtoIRRF6 = 0 ;
   this.AV37TpLancmtoIRRF7 = 0 ;
   this.AV38TpLancmtoIRRF8 = 0 ;
   this.AV39TpLancmtoIRRF9 = 0 ;
   this.AV40TpLancmtoIRRF10 = 0 ;
   this.AV41TpLancmtoIRRF11 = 0 ;
   this.AV42TpLancmtoIRRF12 = 0 ;
   this.AV45TpLancmtoPIS1 = 0 ;
   this.AV46TpLancmtoPIS2 = 0 ;
   this.AV47TpLancmtoPIS3 = 0 ;
   this.AV48TpLancmtoPIS4 = 0 ;
   this.AV49TpLancmtoPIS5 = 0 ;
   this.AV50TpLancmtoPIS6 = 0 ;
   this.AV51TpLancmtoPIS7 = 0 ;
   this.AV52TpLancmtoPIS8 = 0 ;
   this.AV53TpLancmtoPIS9 = 0 ;
   this.AV54TpLancmtoPIS10 = 0 ;
   this.AV55TpLancmtoPIS11 = 0 ;
   this.AV56TpLancmtoPIS12 = 0 ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.Events = {"e11uz2_client": ["'FECHAR'", true] ,"e13uz2_client": ["ENTER", true] ,"e15uz2_client": ["'SALVARTXT'", true] ,"e16uz2_client": ["VTXTTELA.CLICK", true] ,"e17uz2_client": ["'EXCLUIRTXT'", true] ,"e19uz2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV87Pgmname',fld:'vPGMNAME'},{av:'AV83SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV68TxtTela',fld:'vTXTTELA'}],[{av:'AV68TxtTela',fld:'vTXTTELA'},{av:'AV92GXV2',fld:'vGXV2'},{av:'AV84SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV91GXV1',fld:'vGXV1'},{av:'AV31TpLancmtoIRRF1',fld:'vTPLANCMTOIRRF1'},{av:'AV32TpLancmtoIRRF2',fld:'vTPLANCMTOIRRF2'},{av:'AV33TpLancmtoIRRF3',fld:'vTPLANCMTOIRRF3'},{av:'AV34TpLancmtoIRRF4',fld:'vTPLANCMTOIRRF4'},{av:'AV35TpLancmtoIRRF5',fld:'vTPLANCMTOIRRF5'},{av:'AV36TpLancmtoIRRF6',fld:'vTPLANCMTOIRRF6'},{av:'AV37TpLancmtoIRRF7',fld:'vTPLANCMTOIRRF7'},{av:'AV38TpLancmtoIRRF8',fld:'vTPLANCMTOIRRF8'},{av:'AV39TpLancmtoIRRF9',fld:'vTPLANCMTOIRRF9'},{av:'AV40TpLancmtoIRRF10',fld:'vTPLANCMTOIRRF10'},{av:'AV41TpLancmtoIRRF11',fld:'vTPLANCMTOIRRF11'},{av:'AV42TpLancmtoIRRF12',fld:'vTPLANCMTOIRRF12'},{av:'AV45TpLancmtoPIS1',fld:'vTPLANCMTOPIS1'},{av:'AV46TpLancmtoPIS2',fld:'vTPLANCMTOPIS2'},{av:'AV47TpLancmtoPIS3',fld:'vTPLANCMTOPIS3'},{av:'AV48TpLancmtoPIS4',fld:'vTPLANCMTOPIS4'},{av:'AV49TpLancmtoPIS5',fld:'vTPLANCMTOPIS5'},{av:'AV50TpLancmtoPIS6',fld:'vTPLANCMTOPIS6'},{av:'AV51TpLancmtoPIS7',fld:'vTPLANCMTOPIS7'},{av:'AV52TpLancmtoPIS8',fld:'vTPLANCMTOPIS8'},{av:'AV53TpLancmtoPIS9',fld:'vTPLANCMTOPIS9'},{av:'AV54TpLancmtoPIS10',fld:'vTPLANCMTOPIS10'},{av:'AV55TpLancmtoPIS11',fld:'vTPLANCMTOPIS11'},{av:'AV56TpLancmtoPIS12',fld:'vTPLANCMTOPIS12'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV28TpPessoa',fld:'vTPPESSOA'},{av:'AV29DtInicio',fld:'vDTINICIO'},{av:'AV30DtFinal',fld:'vDTFINAL'},{av:'AV31TpLancmtoIRRF1',fld:'vTPLANCMTOIRRF1'},{av:'AV32TpLancmtoIRRF2',fld:'vTPLANCMTOIRRF2'},{av:'AV33TpLancmtoIRRF3',fld:'vTPLANCMTOIRRF3'},{av:'AV34TpLancmtoIRRF4',fld:'vTPLANCMTOIRRF4'},{av:'AV35TpLancmtoIRRF5',fld:'vTPLANCMTOIRRF5'},{av:'AV36TpLancmtoIRRF6',fld:'vTPLANCMTOIRRF6'},{av:'AV37TpLancmtoIRRF7',fld:'vTPLANCMTOIRRF7'},{av:'AV38TpLancmtoIRRF8',fld:'vTPLANCMTOIRRF8'},{av:'AV39TpLancmtoIRRF9',fld:'vTPLANCMTOIRRF9'},{av:'AV40TpLancmtoIRRF10',fld:'vTPLANCMTOIRRF10'},{av:'AV41TpLancmtoIRRF11',fld:'vTPLANCMTOIRRF11'},{av:'AV42TpLancmtoIRRF12',fld:'vTPLANCMTOIRRF12'},{av:'AV45TpLancmtoPIS1',fld:'vTPLANCMTOPIS1'},{av:'AV46TpLancmtoPIS2',fld:'vTPLANCMTOPIS2'},{av:'AV47TpLancmtoPIS3',fld:'vTPLANCMTOPIS3'},{av:'AV48TpLancmtoPIS4',fld:'vTPLANCMTOPIS4'},{av:'AV49TpLancmtoPIS5',fld:'vTPLANCMTOPIS5'},{av:'AV50TpLancmtoPIS6',fld:'vTPLANCMTOPIS6'},{av:'AV51TpLancmtoPIS7',fld:'vTPLANCMTOPIS7'},{av:'AV52TpLancmtoPIS8',fld:'vTPLANCMTOPIS8'},{av:'AV53TpLancmtoPIS9',fld:'vTPLANCMTOPIS9'},{av:'AV54TpLancmtoPIS10',fld:'vTPLANCMTOPIS10'},{av:'AV55TpLancmtoPIS11',fld:'vTPLANCMTOPIS11'},{av:'AV56TpLancmtoPIS12',fld:'vTPLANCMTOPIS12'},{av:'AV43TpLancmtoAux',fld:'vTPLANCMTOAUX'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV44TipoLancamentoEmpresaid',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'AV87Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV68TxtTela',fld:'vTXTTELA'},{av:'AV88Pgmdesc',fld:'vPGMDESC'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV20tpErro',fld:'vTPERRO'},{av:'AV58x',fld:'vX'},{av:'AV43TpLancmtoAux',fld:'vTPLANCMTOAUX'},{av:'AV89GXLvl125',fld:'vGXLVL125'},{av:'AV90GXLvl197',fld:'vGXLVL197'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV56TpLancmtoPIS12',fld:'vTPLANCMTOPIS12'},{av:'AV55TpLancmtoPIS11',fld:'vTPLANCMTOPIS11'},{av:'AV54TpLancmtoPIS10',fld:'vTPLANCMTOPIS10'},{av:'AV53TpLancmtoPIS9',fld:'vTPLANCMTOPIS9'},{av:'AV52TpLancmtoPIS8',fld:'vTPLANCMTOPIS8'},{av:'AV51TpLancmtoPIS7',fld:'vTPLANCMTOPIS7'},{av:'AV50TpLancmtoPIS6',fld:'vTPLANCMTOPIS6'},{av:'AV49TpLancmtoPIS5',fld:'vTPLANCMTOPIS5'},{av:'AV48TpLancmtoPIS4',fld:'vTPLANCMTOPIS4'},{av:'AV47TpLancmtoPIS3',fld:'vTPLANCMTOPIS3'},{av:'AV46TpLancmtoPIS2',fld:'vTPLANCMTOPIS2'},{av:'AV45TpLancmtoPIS1',fld:'vTPLANCMTOPIS1'},{av:'AV42TpLancmtoIRRF12',fld:'vTPLANCMTOIRRF12'},{av:'AV41TpLancmtoIRRF11',fld:'vTPLANCMTOIRRF11'},{av:'AV40TpLancmtoIRRF10',fld:'vTPLANCMTOIRRF10'},{av:'AV39TpLancmtoIRRF9',fld:'vTPLANCMTOIRRF9'},{av:'AV38TpLancmtoIRRF8',fld:'vTPLANCMTOIRRF8'},{av:'AV37TpLancmtoIRRF7',fld:'vTPLANCMTOIRRF7'},{av:'AV36TpLancmtoIRRF6',fld:'vTPLANCMTOIRRF6'},{av:'AV35TpLancmtoIRRF5',fld:'vTPLANCMTOIRRF5'},{av:'AV34TpLancmtoIRRF4',fld:'vTPLANCMTOIRRF4'},{av:'AV33TpLancmtoIRRF3',fld:'vTPLANCMTOIRRF3'},{av:'AV32TpLancmtoIRRF2',fld:'vTPLANCMTOIRRF2'},{av:'AV31TpLancmtoIRRF1',fld:'vTPLANCMTOIRRF1'},{av:'AV28TpPessoa',fld:'vTPPESSOA'},{av:'AV30DtFinal',fld:'vDTFINAL'},{av:'AV29DtInicio',fld:'vDTINICIO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV79SNTxtTelaRelat',fld:'vSNTXTTELARELAT'},{av:'AV82OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV68TxtTela',fld:'vTXTTELA'},{av:'AV87Pgmname',fld:'vPGMNAME'},{av:'AV31TpLancmtoIRRF1',fld:'vTPLANCMTOIRRF1'},{av:'AV32TpLancmtoIRRF2',fld:'vTPLANCMTOIRRF2'},{av:'AV33TpLancmtoIRRF3',fld:'vTPLANCMTOIRRF3'},{av:'AV34TpLancmtoIRRF4',fld:'vTPLANCMTOIRRF4'},{av:'AV35TpLancmtoIRRF5',fld:'vTPLANCMTOIRRF5'},{av:'AV36TpLancmtoIRRF6',fld:'vTPLANCMTOIRRF6'},{av:'AV37TpLancmtoIRRF7',fld:'vTPLANCMTOIRRF7'},{av:'AV38TpLancmtoIRRF8',fld:'vTPLANCMTOIRRF8'},{av:'AV39TpLancmtoIRRF9',fld:'vTPLANCMTOIRRF9'},{av:'AV40TpLancmtoIRRF10',fld:'vTPLANCMTOIRRF10'},{av:'AV41TpLancmtoIRRF11',fld:'vTPLANCMTOIRRF11'},{av:'AV42TpLancmtoIRRF12',fld:'vTPLANCMTOIRRF12'},{av:'AV45TpLancmtoPIS1',fld:'vTPLANCMTOPIS1'},{av:'AV46TpLancmtoPIS2',fld:'vTPLANCMTOPIS2'},{av:'AV47TpLancmtoPIS3',fld:'vTPLANCMTOPIS3'},{av:'AV48TpLancmtoPIS4',fld:'vTPLANCMTOPIS4'},{av:'AV49TpLancmtoPIS5',fld:'vTPLANCMTOPIS5'},{av:'AV50TpLancmtoPIS6',fld:'vTPLANCMTOPIS6'},{av:'AV51TpLancmtoPIS7',fld:'vTPLANCMTOPIS7'},{av:'AV52TpLancmtoPIS8',fld:'vTPLANCMTOPIS8'},{av:'AV53TpLancmtoPIS9',fld:'vTPLANCMTOPIS9'},{av:'AV54TpLancmtoPIS10',fld:'vTPLANCMTOPIS10'},{av:'AV55TpLancmtoPIS11',fld:'vTPLANCMTOPIS11'},{av:'AV56TpLancmtoPIS12',fld:'vTPLANCMTOPIS12'}],[{av:'AV82OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV87Pgmname',fld:'vPGMNAME'},{av:'AV83SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV68TxtTela',fld:'vTXTTELA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV91GXV1',fld:'vGXV1'},{av:'AV84SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV31TpLancmtoIRRF1',fld:'vTPLANCMTOIRRF1'},{av:'AV32TpLancmtoIRRF2',fld:'vTPLANCMTOIRRF2'},{av:'AV33TpLancmtoIRRF3',fld:'vTPLANCMTOIRRF3'},{av:'AV34TpLancmtoIRRF4',fld:'vTPLANCMTOIRRF4'},{av:'AV35TpLancmtoIRRF5',fld:'vTPLANCMTOIRRF5'},{av:'AV36TpLancmtoIRRF6',fld:'vTPLANCMTOIRRF6'},{av:'AV37TpLancmtoIRRF7',fld:'vTPLANCMTOIRRF7'},{av:'AV38TpLancmtoIRRF8',fld:'vTPLANCMTOIRRF8'},{av:'AV39TpLancmtoIRRF9',fld:'vTPLANCMTOIRRF9'},{av:'AV40TpLancmtoIRRF10',fld:'vTPLANCMTOIRRF10'},{av:'AV41TpLancmtoIRRF11',fld:'vTPLANCMTOIRRF11'},{av:'AV42TpLancmtoIRRF12',fld:'vTPLANCMTOIRRF12'},{av:'AV45TpLancmtoPIS1',fld:'vTPLANCMTOPIS1'},{av:'AV46TpLancmtoPIS2',fld:'vTPLANCMTOPIS2'},{av:'AV47TpLancmtoPIS3',fld:'vTPLANCMTOPIS3'},{av:'AV48TpLancmtoPIS4',fld:'vTPLANCMTOPIS4'},{av:'AV49TpLancmtoPIS5',fld:'vTPLANCMTOPIS5'},{av:'AV50TpLancmtoPIS6',fld:'vTPLANCMTOPIS6'},{av:'AV51TpLancmtoPIS7',fld:'vTPLANCMTOPIS7'},{av:'AV52TpLancmtoPIS8',fld:'vTPLANCMTOPIS8'},{av:'AV53TpLancmtoPIS9',fld:'vTPLANCMTOPIS9'},{av:'AV54TpLancmtoPIS10',fld:'vTPLANCMTOPIS10'},{av:'AV55TpLancmtoPIS11',fld:'vTPLANCMTOPIS11'},{av:'AV56TpLancmtoPIS12',fld:'vTPLANCMTOPIS12'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV87Pgmname',fld:'vPGMNAME'},{av:'AV68TxtTela',fld:'vTXTTELA'}],[]];
   this.setPrompt("PROMPT_TPLANCMTOIRRF1", [51]);
   this.setPrompt("PROMPT_TPLANCMTOIRRF2", [53]);
   this.setPrompt("PROMPT_TPLANCMTOIRRF3", [55]);
   this.setPrompt("PROMPT_TPLANCMTOIRRF4", [57]);
   this.setPrompt("PROMPT_TPLANCMTOIRRF5", [59]);
   this.setPrompt("PROMPT_TPLANCMTOIRRF6", [61]);
   this.setPrompt("PROMPT_TPLANCMTOIRRF7", [65]);
   this.setPrompt("PROMPT_TPLANCMTOIRRF8", [67]);
   this.setPrompt("PROMPT_TPLANCMTOIRRF9", [69]);
   this.setPrompt("PROMPT_TPLANCMTOIRRF10", [71]);
   this.setPrompt("PROMPT_TPLANCMTOIRRF11", [73]);
   this.setPrompt("PROMPT_TPLANCMTOIRRF12", [75]);
   this.setPrompt("PROMPT_TPLANCMTOPIS1", [88]);
   this.setPrompt("PROMPT_TPLANCMTOPIS2", [90]);
   this.setPrompt("PROMPT_TPLANCMTOPIS3", [92]);
   this.setPrompt("PROMPT_TPLANCMTOPIS4", [94]);
   this.setPrompt("PROMPT_TPLANCMTOPIS5", [96]);
   this.setPrompt("PROMPT_TPLANCMTOPIS6", [98]);
   this.setPrompt("PROMPT_TPLANCMTOPIS7", [102]);
   this.setPrompt("PROMPT_TPLANCMTOPIS8", [104]);
   this.setPrompt("PROMPT_TPLANCMTOPIS9", [106]);
   this.setPrompt("PROMPT_TPLANCMTOPIS10", [108]);
   this.setPrompt("PROMPT_TPLANCMTOPIS11", [110]);
   this.setPrompt("PROMPT_TPLANCMTOPIS12", [112]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrecolhimentoimpostos());