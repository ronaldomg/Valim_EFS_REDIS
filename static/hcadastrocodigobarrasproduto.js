/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:3:16.25
*/
gx.evt.autoSkip = false;
gx.define('hcadastrocodigobarrasproduto', false, function () {
   this.ServerClass =  "hcadastrocodigobarrasproduto" ;
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
      this.AV8CodigoBarrasProdutoBarraParm=gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRAPARM",'.') ;
   };
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1129m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1329m2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1629m2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,30,32,34,41,44,45,47];
   this.GXLastCtrlId =47;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[],fld:"vPRODUTOID",gxz:"ZV18Produtoid",gxold:"OV18Produtoid",gxvar:"AV18Produtoid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18Produtoid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Produtoid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV18Produtoid,0)},c2v:function(){gx.O.AV18Produtoid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV7CodigoBarrasProdutoBarra",gxold:"OV7CodigoBarrasProdutoBarra",gxvar:"AV7CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV7CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV7CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASEANTRIBUTAVEL",gxz:"ZV6CodigoBarrasEANTributavel",gxold:"OV6CodigoBarrasEANTributavel",gxvar:"AV6CodigoBarrasEANTributavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6CodigoBarrasEANTributavel=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6CodigoBarrasEANTributavel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASEANTRIBUTAVEL",gx.O.AV6CodigoBarrasEANTributavel,0)},c2v:function(){gx.O.AV6CodigoBarrasEANTributavel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASEANTRIBUTAVEL",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOUSUARIOALT",gxz:"ZV10CodigoBarrasProdutoUsuarioAlt",gxold:"OV10CodigoBarrasProdutoUsuarioAlt",gxvar:"AV10CodigoBarrasProdutoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10CodigoBarrasProdutoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV10CodigoBarrasProdutoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOUSUARIOALT",gx.O.AV10CodigoBarrasProdutoUsuarioAlt,0)},c2v:function(){gx.O.AV10CodigoBarrasProdutoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCODIGOBARRASPRODUTOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTODATAHORAALT",gxz:"ZV9CodigoBarrasProdutoDataHoraAlt",gxold:"OV9CodigoBarrasProdutoDataHoraAlt",gxvar:"AV9CodigoBarrasProdutoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9CodigoBarrasProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9CodigoBarrasProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTODATAHORAALT",gx.O.AV9CodigoBarrasProdutoDataHoraAlt,0)},c2v:function(){gx.O.AV9CodigoBarrasProdutoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCODIGOBARRASPRODUTODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOTIPOVENDABALANCA",gxz:"ZV19ProdutoTipoVendaBalanca",gxold:"OV19ProdutoTipoVendaBalanca",gxvar:"AV19ProdutoTipoVendaBalanca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19ProdutoTipoVendaBalanca=Value},v2z:function(Value){gx.O.ZV19ProdutoTipoVendaBalanca=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOTIPOVENDABALANCA",gx.O.AV19ProdutoTipoVendaBalanca)},c2v:function(){gx.O.AV19ProdutoTipoVendaBalanca=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOTIPOVENDABALANCA")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV5AcessoSistemaSequencia",gxold:"OV5AcessoSistemaSequencia",gxvar:"AV5AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV5AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODO",gxz:"ZV15Modo",gxold:"OV15Modo",gxvar:"AV15Modo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15Modo=Value},v2z:function(Value){gx.O.ZV15Modo=Value},v2c:function(){gx.fn.setControlValue("vMODO",gx.O.AV15Modo,0)},c2v:function(){gx.O.AV15Modo=this.val()},val:function(){return gx.fn.getControlValue("vMODO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   this.AV18Produtoid = 0 ;
   this.ZV18Produtoid = 0 ;
   this.OV18Produtoid = 0 ;
   this.AV7CodigoBarrasProdutoBarra = 0 ;
   this.ZV7CodigoBarrasProdutoBarra = 0 ;
   this.OV7CodigoBarrasProdutoBarra = 0 ;
   this.AV6CodigoBarrasEANTributavel = 0 ;
   this.ZV6CodigoBarrasEANTributavel = 0 ;
   this.OV6CodigoBarrasEANTributavel = 0 ;
   this.AV10CodigoBarrasProdutoUsuarioAlt = "" ;
   this.ZV10CodigoBarrasProdutoUsuarioAlt = "" ;
   this.OV10CodigoBarrasProdutoUsuarioAlt = "" ;
   this.AV9CodigoBarrasProdutoDataHoraAlt = gx.date.nullDate() ;
   this.ZV9CodigoBarrasProdutoDataHoraAlt = gx.date.nullDate() ;
   this.OV9CodigoBarrasProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV19ProdutoTipoVendaBalanca = "" ;
   this.ZV19ProdutoTipoVendaBalanca = "" ;
   this.OV19ProdutoTipoVendaBalanca = "" ;
   this.AV5AcessoSistemaSequencia = 0 ;
   this.ZV5AcessoSistemaSequencia = 0 ;
   this.OV5AcessoSistemaSequencia = 0 ;
   this.AV15Modo = "" ;
   this.ZV15Modo = "" ;
   this.OV15Modo = "" ;
   this.AV18Produtoid = 0 ;
   this.AV7CodigoBarrasProdutoBarra = 0 ;
   this.AV6CodigoBarrasEANTributavel = 0 ;
   this.AV10CodigoBarrasProdutoUsuarioAlt = "" ;
   this.AV9CodigoBarrasProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV19ProdutoTipoVendaBalanca = "" ;
   this.AV5AcessoSistemaSequencia = 0 ;
   this.AV15Modo = "" ;
   this.AV8CodigoBarrasProdutoBarraParm = 0 ;
   this.A2968CodigoBarrasProdutoBarra = 0 ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3450CodigoBarrasEANTributavel = 0 ;
   this.A2966CodigoBarrasProdutoUsuarioAlt = "" ;
   this.A2967CodigoBarrasProdutoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e1129m2_client": ["'FECHAR'", true] ,"e1329m2_client": ["ENTER", true] ,"e1629m2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV15Modo',fld:'vMODO'}],[{av:'gx.fn.getCtrlProperty("vCODIGOBARRASEANTRIBUTAVEL","Enabled")',ctrl:'vCODIGOBARRASEANTRIBUTAVEL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCODIGOBARRASPRODUTOBARRA","Enabled")',ctrl:'vCODIGOBARRASPRODUTOBARRA',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV5AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18Produtoid',fld:'vPRODUTOID'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18Produtoid',fld:'vPRODUTOID'},{av:'AV7CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA'},{av:'AV6CodigoBarrasEANTributavel',fld:'vCODIGOBARRASEANTRIBUTAVEL'},{av:'AV15Modo',fld:'vMODO'},{av:'AV19ProdutoTipoVendaBalanca',fld:'vPRODUTOTIPOVENDABALANCA'},{av:'AV5AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'AV22tpErro',fld:'vTPERRO'},{av:'AV15Modo',fld:'vMODO'},{av:'AV6CodigoBarrasEANTributavel',fld:'vCODIGOBARRASEANTRIBUTAVEL'},{av:'AV7CodigoBarrasProdutoBarra',fld:'vCODIGOBARRASPRODUTOBARRA'},{av:'AV18Produtoid',fld:'vPRODUTOID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV17MsgErro',fld:'vMSGERRO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV8CodigoBarrasProdutoBarraParm", "vCODIGOBARRASPRODUTOBARRAPARM", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcadastrocodigobarrasproduto());
