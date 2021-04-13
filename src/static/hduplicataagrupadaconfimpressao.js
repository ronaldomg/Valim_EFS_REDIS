/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:36:36.11
*/
gx.evt.autoSkip = false;
gx.define('hduplicataagrupadaconfimpressao', false, function () {
   this.ServerClass =  "hduplicataagrupadaconfimpressao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.s112_client=function()
   {
      this.AV26SnErro =  "N"  ;
      if ( (0==this.AV36QtdeVias) )
      {
         this.addMessage("Informe a quantidade de vias");
         gx.fn.usrSetFocus("vQTDEVIAS") ;
         this.AV26SnErro =  "S"  ;
      }
      if ( this.AV26SnErro == "N" )
      {
         if ( (0.0==this.AV34ValorDesconto) && ! (new gx.date.gxdate("").compare(this.AV35DataDesconto)==0) )
         {
            this.addMessage("Para informar a data do desconto informe o valor");
            gx.fn.usrSetFocus("vVALORDESCONTO") ;
            this.AV26SnErro =  "S"  ;
         }
      }
   };
   this.e122452_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132452_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e162452_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,19,21,22,25,27,30,32,40];
   this.GXLastCtrlId =40;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEID",gxz:"ZV32ClienteId",gxold:"OV32ClienteId",gxvar:"AV32ClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32ClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLIENTEID",gx.O.AV32ClienteId,0)},c2v:function(){gx.O.AV32ClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTENOME",gxz:"ZV33ClienteNome",gxold:"OV33ClienteNome",gxvar:"AV33ClienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ClienteNome=Value},v2z:function(Value){gx.O.ZV33ClienteNome=Value},v2c:function(){gx.fn.setControlValue("vCLIENTENOME",gx.O.AV33ClienteNome,0)},c2v:function(){gx.O.AV33ClienteNome=this.val()},val:function(){return gx.fn.getControlValue("vCLIENTENOME")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTAL",gxz:"ZV30ValorTotal",gxold:"OV30ValorTotal",gxvar:"AV30ValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV30ValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTAL",gx.O.AV30ValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV30ValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEVIAS",gxz:"ZV36QtdeVias",gxold:"OV36QtdeVias",gxvar:"AV36QtdeVias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36QtdeVias=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36QtdeVias=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEVIAS",gx.O.AV36QtdeVias,0)},c2v:function(){gx.O.AV36QtdeVias=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEVIAS",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TABDESCONTO",grid:0};
   GXValidFnc[25]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORDESCONTO",gxz:"ZV34ValorDesconto",gxold:"OV34ValorDesconto",gxvar:"AV34ValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ValorDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV34ValorDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORDESCONTO",gx.O.AV34ValorDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV34ValorDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORDESCONTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATADESCONTO",gxz:"ZV35DataDesconto",gxold:"OV35DataDesconto",gxvar:"AV35DataDesconto",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35DataDesconto=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV35DataDesconto=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATADESCONTO",gx.O.AV35DataDesconto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV35DataDesconto=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATADESCONTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[40]={fld:"JS", format:2,grid:0};
   this.AV32ClienteId = 0 ;
   this.ZV32ClienteId = 0 ;
   this.OV32ClienteId = 0 ;
   this.AV33ClienteNome = "" ;
   this.ZV33ClienteNome = "" ;
   this.OV33ClienteNome = "" ;
   this.AV30ValorTotal = 0 ;
   this.ZV30ValorTotal = 0 ;
   this.OV30ValorTotal = 0 ;
   this.AV36QtdeVias = 0 ;
   this.ZV36QtdeVias = 0 ;
   this.OV36QtdeVias = 0 ;
   this.AV34ValorDesconto = 0 ;
   this.ZV34ValorDesconto = 0 ;
   this.OV34ValorDesconto = 0 ;
   this.AV35DataDesconto = gx.date.nullDate() ;
   this.ZV35DataDesconto = gx.date.nullDate() ;
   this.OV35DataDesconto = gx.date.nullDate() ;
   this.AV32ClienteId = 0 ;
   this.AV33ClienteNome = "" ;
   this.AV30ValorTotal = 0 ;
   this.AV36QtdeVias = 0 ;
   this.AV34ValorDesconto = 0 ;
   this.AV35DataDesconto = gx.date.nullDate() ;
   this.AV26SnErro = "" ;
   this.Events = {"e122452_client": ["ENTER", true] ,"e132452_client": ["'FECHAR'", true] ,"e162452_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV37SnDesconto',fld:'vSNDESCONTO'}],[{av:'gx.fn.getCtrlProperty("TABDESCONTO","Visible")',ctrl:'TABDESCONTO',prop:'Visible'}]];
   this.EvtParms["ENTER"] = [[{av:'AV26SnErro',fld:'vSNERRO'},{av:'AV36QtdeVias',fld:'vQTDEVIAS'},{av:'AV37SnDesconto',fld:'vSNDESCONTO'},{av:'AV34ValorDesconto',fld:'vVALORDESCONTO'},{av:'AV35DataDesconto',fld:'vDATADESCONTO'},{av:'AV38DataNula',fld:'vDATANULA'}],[{av:'AV26SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV36QtdeVias',fld:'vQTDEVIAS'},{av:'AV38DataNula',fld:'vDATANULA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicataagrupadaconfimpressao());
