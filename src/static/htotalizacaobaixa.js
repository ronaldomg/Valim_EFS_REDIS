/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:9.42
*/
gx.evt.autoSkip = false;
gx.define('htotalizacaobaixa', false, function () {
   this.ServerClass =  "htotalizacaobaixa" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV18TpTela=gx.fn.getControlValue("vTPTELA") ;
   };
   this.e12l02_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14l02_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15l02_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,18,20,23,25];
   this.GXLastCtrlId =25;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALDESCONTO",gxz:"ZV13TotalDesconto",gxold:"OV13TotalDesconto",gxvar:"AV13TotalDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13TotalDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV13TotalDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTALDESCONTO",gx.O.AV13TotalDesconto,2,',')},c2v:function(){gx.O.AV13TotalDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTALDESCONTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALACRESCIMO",gxz:"ZV12TotalAcrescimo",gxold:"OV12TotalAcrescimo",gxvar:"AV12TotalAcrescimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12TotalAcrescimo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV12TotalAcrescimo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTALACRESCIMO",gx.O.AV12TotalAcrescimo,2,',')},c2v:function(){gx.O.AV12TotalAcrescimo=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTALACRESCIMO",'.',',')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALJUROSADICIONAIS",gxz:"ZV19TotalJurosAdicionais",gxold:"OV19TotalJurosAdicionais",gxvar:"AV19TotalJurosAdicionais",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19TotalJurosAdicionais=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV19TotalJurosAdicionais=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTALJUROSADICIONAIS",gx.O.AV19TotalJurosAdicionais,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19TotalJurosAdicionais=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTALJUROSADICIONAIS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTALBAIXA",gxz:"ZV11TotalBaixa",gxold:"OV11TotalBaixa",gxvar:"AV11TotalBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11TotalBaixa=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV11TotalBaixa=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTALBAIXA",gx.O.AV11TotalBaixa,2,',')},c2v:function(){gx.O.AV11TotalBaixa=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTALBAIXA",'.',',')},nac:gx.falseFn};
   this.AV13TotalDesconto = 0 ;
   this.ZV13TotalDesconto = 0 ;
   this.OV13TotalDesconto = 0 ;
   this.AV12TotalAcrescimo = 0 ;
   this.ZV12TotalAcrescimo = 0 ;
   this.OV12TotalAcrescimo = 0 ;
   this.AV19TotalJurosAdicionais = 0 ;
   this.ZV19TotalJurosAdicionais = 0 ;
   this.OV19TotalJurosAdicionais = 0 ;
   this.AV11TotalBaixa = 0 ;
   this.ZV11TotalBaixa = 0 ;
   this.OV11TotalBaixa = 0 ;
   this.AV13TotalDesconto = 0 ;
   this.AV12TotalAcrescimo = 0 ;
   this.AV19TotalJurosAdicionais = 0 ;
   this.AV11TotalBaixa = 0 ;
   this.AV18TpTela = "" ;
   this.Events = {"e12l02_client": ["'FECHAR'", true] ,"e14l02_client": ["ENTER", true] ,"e15l02_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV18TpTela", "vTPTELA", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new htotalizacaobaixa());
