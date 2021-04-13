/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:30:26.73
*/
gx.evt.autoSkip = false;
gx.define('gx06y3', false, function () {
   this.ServerClass =  "gx06y3" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV10pIntegracaoPatCblEmpresaId=gx.fn.getControlValue("vPINTEGRACAOPATCBLEMPRESAID") ;
      this.AV11pIntegracaoPatCblTipoLancam=gx.fn.getControlValue("vPINTEGRACAOPATCBLTIPOLANCAM") ;
      this.AV12pIntegracaoPatCblTipoValor=gx.fn.getControlValue("vPINTEGRACAOPATCBLTIPOVALOR") ;
      this.AV13pIntegracaoPatCblCompDebCre=gx.fn.getControlValue("vPINTEGRACAOPATCBLCOMPDEBCRE") ;
      this.AV14pIntegracaoPatCblCompPosicao=gx.fn.getIntegerValue("vPINTEGRACAOPATCBLCOMPPOSICAO",'.') ;
   };
   this.Validv_Cintegracaopatcblcompdebcre=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCINTEGRACAOPATCBLCOMPDEBCRE");
         this.AnyError  = 0;
         if ( ! ( this.AV6cIntegracaoPatCblCompDebCre == "N" || this.AV6cIntegracaoPatCblCompDebCre == "C" || this.AV6cIntegracaoPatCblCompDebCre == "D" || (""==this.AV6cIntegracaoPatCblCompDebCre) ) )
         {
            try {
               gxballoon.setError("Campo cIntegracaoPatCblCompDebCre fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e131md2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141md1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,42,43,46];
   this.GXLastCtrlId =46;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx06y3",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addComboBox(2400,38,"INTEGRACAOPATCBLCOMPDEBCRE","Integracao Pat Cbl Comp Deb Cre","IntegracaoPatCblCompDebCre","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(2401,39,"INTEGRACAOPATCBLCOMPPOSICAO","Integracao Pat Cbl Comp Posicao","","IntegracaoPatCblCompPosicao","int",0,"px",2,2,"right",null,[],2401,"IntegracaoPatCblCompPosicao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(2394,40,"INTEGRACAOPATCBLCOMPCAMPO","Integracao Pat Cbl Comp Campo","IntegracaoPatCblCompCampo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(2397,41,"INTEGRACAOPATCBLEMPRESAID","Integracao Pat Cbl Empresa Id","","IntegracaoPatCblEmpresaId","char",0,"px",10,10,"left",null,[],2397,"IntegracaoPatCblEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(2398,42,"INTEGRACAOPATCBLTIPOLANCAM","Integracao Pat Cbl Tipo Lancam","IntegracaoPatCblTipoLancam","char",null,0,false,false,0,"px","");
   Grid1Container.addComboBox(2399,43,"INTEGRACAOPATCBLTIPOVALOR","Integracao Pat Cbl Tipo Valor","IntegracaoPatCblTipoValor","char",null,0,false,false,0,"px","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKINTEGRACAOPATCBLCOMPDEBCRE", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cintegracaopatcblcompdebcre,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOPATCBLCOMPDEBCRE",gxz:"ZV6cIntegracaoPatCblCompDebCre",gxold:"OV6cIntegracaoPatCblCompDebCre",gxvar:"AV6cIntegracaoPatCblCompDebCre",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV6cIntegracaoPatCblCompDebCre=Value},v2z:function(Value){gx.O.ZV6cIntegracaoPatCblCompDebCre=Value},v2c:function(){gx.fn.setComboBoxValue("vCINTEGRACAOPATCBLCOMPDEBCRE",gx.O.AV6cIntegracaoPatCblCompDebCre)},c2v:function(){gx.O.AV6cIntegracaoPatCblCompDebCre=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOPATCBLCOMPDEBCRE")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKINTEGRACAOPATCBLCOMPPOSICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOPATCBLCOMPPOSICAO",gxz:"ZV7cIntegracaoPatCblCompPosicao",gxold:"OV7cIntegracaoPatCblCompPosicao",gxvar:"AV7cIntegracaoPatCblCompPosicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cIntegracaoPatCblCompPosicao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cIntegracaoPatCblCompPosicao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOPATCBLCOMPPOSICAO",gx.O.AV7cIntegracaoPatCblCompPosicao,0)},c2v:function(){gx.O.AV7cIntegracaoPatCblCompPosicao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCINTEGRACAOPATCBLCOMPPOSICAO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKINTEGRACAOPATCBLCOMPCAMPO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOPATCBLCOMPCAMPO",gxz:"ZV8cIntegracaoPatCblCompCampo",gxold:"OV8cIntegracaoPatCblCompCampo",gxvar:"AV8cIntegracaoPatCblCompCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cIntegracaoPatCblCompCampo=Value},v2z:function(Value){gx.O.ZV8cIntegracaoPatCblCompCampo=Value},v2c:function(){gx.fn.setComboBoxValue("vCINTEGRACAOPATCBLCOMPCAMPO",gx.O.AV8cIntegracaoPatCblCompCampo)},c2v:function(){gx.O.AV8cIntegracaoPatCblCompCampo=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOPATCBLCOMPCAMPO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKINTEGRACAOPATCBLCOMPUSUARIOALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOPATCBLCOMPUSUARIOALT",gxz:"ZV9cIntegracaoPatCblCompUsuarioAlt",gxold:"OV9cIntegracaoPatCblCompUsuarioAlt",gxvar:"AV9cIntegracaoPatCblCompUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cIntegracaoPatCblCompUsuarioAlt=Value},v2z:function(Value){gx.O.ZV9cIntegracaoPatCblCompUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOPATCBLCOMPUSUARIOALT",gx.O.AV9cIntegracaoPatCblCompUsuarioAlt,0)},c2v:function(){gx.O.AV9cIntegracaoPatCblCompUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOPATCBLCOMPUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"GROUP2",grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLCOMPDEBCRE",gxz:"Z2400IntegracaoPatCblCompDebCre",gxold:"O2400IntegracaoPatCblCompDebCre",gxvar:"A2400IntegracaoPatCblCompDebCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2400IntegracaoPatCblCompDebCre=Value},v2z:function(Value){gx.O.Z2400IntegracaoPatCblCompDebCre=Value},v2c:function(row){gx.fn.setGridComboBoxValue("INTEGRACAOPATCBLCOMPDEBCRE",row || gx.fn.currentGridRowImpl(36),gx.O.A2400IntegracaoPatCblCompDebCre);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2400IntegracaoPatCblCompDebCre=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOPATCBLCOMPDEBCRE",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLCOMPPOSICAO",gxz:"Z2401IntegracaoPatCblCompPosicao",gxold:"O2401IntegracaoPatCblCompPosicao",gxvar:"A2401IntegracaoPatCblCompPosicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2401IntegracaoPatCblCompPosicao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2401IntegracaoPatCblCompPosicao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOPATCBLCOMPPOSICAO",row || gx.fn.currentGridRowImpl(36),gx.O.A2401IntegracaoPatCblCompPosicao,0)},c2v:function(){gx.O.A2401IntegracaoPatCblCompPosicao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INTEGRACAOPATCBLCOMPPOSICAO",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLCOMPCAMPO",gxz:"Z2394IntegracaoPatCblCompCampo",gxold:"O2394IntegracaoPatCblCompCampo",gxvar:"A2394IntegracaoPatCblCompCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2394IntegracaoPatCblCompCampo=Value},v2z:function(Value){gx.O.Z2394IntegracaoPatCblCompCampo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("INTEGRACAOPATCBLCOMPCAMPO",row || gx.fn.currentGridRowImpl(36),gx.O.A2394IntegracaoPatCblCompCampo)},c2v:function(){gx.O.A2394IntegracaoPatCblCompCampo=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOPATCBLCOMPCAMPO",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLEMPRESAID",gxz:"Z2397IntegracaoPatCblEmpresaId",gxold:"O2397IntegracaoPatCblEmpresaId",gxvar:"A2397IntegracaoPatCblEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2397IntegracaoPatCblEmpresaId=Value},v2z:function(Value){gx.O.Z2397IntegracaoPatCblEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOPATCBLEMPRESAID",row || gx.fn.currentGridRowImpl(36),gx.O.A2397IntegracaoPatCblEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2397IntegracaoPatCblEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOPATCBLEMPRESAID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLTIPOLANCAM",gxz:"Z2398IntegracaoPatCblTipoLancam",gxold:"O2398IntegracaoPatCblTipoLancam",gxvar:"A2398IntegracaoPatCblTipoLancam",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2398IntegracaoPatCblTipoLancam=Value},v2z:function(Value){gx.O.Z2398IntegracaoPatCblTipoLancam=Value},v2c:function(row){gx.fn.setGridComboBoxValue("INTEGRACAOPATCBLTIPOLANCAM",row || gx.fn.currentGridRowImpl(36),gx.O.A2398IntegracaoPatCblTipoLancam)},c2v:function(){gx.O.A2398IntegracaoPatCblTipoLancam=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOPATCBLTIPOLANCAM",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOPATCBLTIPOVALOR",gxz:"Z2399IntegracaoPatCblTipoValor",gxold:"O2399IntegracaoPatCblTipoValor",gxvar:"A2399IntegracaoPatCblTipoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2399IntegracaoPatCblTipoValor=Value},v2z:function(Value){gx.O.Z2399IntegracaoPatCblTipoValor=Value},v2c:function(row){gx.fn.setGridComboBoxValue("INTEGRACAOPATCBLTIPOVALOR",row || gx.fn.currentGridRowImpl(36),gx.O.A2399IntegracaoPatCblTipoValor)},c2v:function(){gx.O.A2399IntegracaoPatCblTipoValor=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOPATCBLTIPOVALOR",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TABLE4",grid:0};
   this.AV6cIntegracaoPatCblCompDebCre = "" ;
   this.ZV6cIntegracaoPatCblCompDebCre = "" ;
   this.OV6cIntegracaoPatCblCompDebCre = "" ;
   this.AV7cIntegracaoPatCblCompPosicao = 0 ;
   this.ZV7cIntegracaoPatCblCompPosicao = 0 ;
   this.OV7cIntegracaoPatCblCompPosicao = 0 ;
   this.AV8cIntegracaoPatCblCompCampo = "" ;
   this.ZV8cIntegracaoPatCblCompCampo = "" ;
   this.OV8cIntegracaoPatCblCompCampo = "" ;
   this.AV9cIntegracaoPatCblCompUsuarioAlt = "" ;
   this.ZV9cIntegracaoPatCblCompUsuarioAlt = "" ;
   this.OV9cIntegracaoPatCblCompUsuarioAlt = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2400IntegracaoPatCblCompDebCre = "" ;
   this.O2400IntegracaoPatCblCompDebCre = "" ;
   this.Z2401IntegracaoPatCblCompPosicao = 0 ;
   this.O2401IntegracaoPatCblCompPosicao = 0 ;
   this.Z2394IntegracaoPatCblCompCampo = "" ;
   this.O2394IntegracaoPatCblCompCampo = "" ;
   this.Z2397IntegracaoPatCblEmpresaId = "" ;
   this.O2397IntegracaoPatCblEmpresaId = "" ;
   this.Z2398IntegracaoPatCblTipoLancam = "" ;
   this.O2398IntegracaoPatCblTipoLancam = "" ;
   this.Z2399IntegracaoPatCblTipoValor = "" ;
   this.O2399IntegracaoPatCblTipoValor = "" ;
   this.AV6cIntegracaoPatCblCompDebCre = "" ;
   this.AV7cIntegracaoPatCblCompPosicao = 0 ;
   this.AV8cIntegracaoPatCblCompCampo = "" ;
   this.AV9cIntegracaoPatCblCompUsuarioAlt = "" ;
   this.AV10pIntegracaoPatCblEmpresaId = "" ;
   this.AV11pIntegracaoPatCblTipoLancam = "" ;
   this.AV12pIntegracaoPatCblTipoValor = "" ;
   this.AV13pIntegracaoPatCblCompDebCre = "" ;
   this.AV14pIntegracaoPatCblCompPosicao = 0 ;
   this.A2395IntegracaoPatCblCompUsuarioAlt = "" ;
   this.AV5LinkSelection = "" ;
   this.A2400IntegracaoPatCblCompDebCre = "" ;
   this.A2401IntegracaoPatCblCompPosicao = 0 ;
   this.A2394IntegracaoPatCblCompCampo = "" ;
   this.A2397IntegracaoPatCblEmpresaId = "" ;
   this.A2398IntegracaoPatCblTipoLancam = "" ;
   this.A2399IntegracaoPatCblTipoValor = "" ;
   this.Events = {"e131md2_client": ["ENTER", true] ,"e141md1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoPatCblCompDebCre',fld:'vCINTEGRACAOPATCBLCOMPDEBCRE'},{av:'AV7cIntegracaoPatCblCompPosicao',fld:'vCINTEGRACAOPATCBLCOMPPOSICAO'},{av:'AV8cIntegracaoPatCblCompCampo',fld:'vCINTEGRACAOPATCBLCOMPCAMPO'},{av:'AV9cIntegracaoPatCblCompUsuarioAlt',fld:'vCINTEGRACAOPATCBLCOMPUSUARIOALT'},{av:'AV10pIntegracaoPatCblEmpresaId',fld:'vPINTEGRACAOPATCBLEMPRESAID',hsh:true},{av:'AV11pIntegracaoPatCblTipoLancam',fld:'vPINTEGRACAOPATCBLTIPOLANCAM',hsh:true},{av:'AV12pIntegracaoPatCblTipoValor',fld:'vPINTEGRACAOPATCBLTIPOVALOR',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2400IntegracaoPatCblCompDebCre',fld:'INTEGRACAOPATCBLCOMPDEBCRE'},{av:'A2401IntegracaoPatCblCompPosicao',fld:'INTEGRACAOPATCBLCOMPPOSICAO'}],[{av:'AV13pIntegracaoPatCblCompDebCre',fld:'vPINTEGRACAOPATCBLCOMPDEBCRE'},{av:'AV14pIntegracaoPatCblCompPosicao',fld:'vPINTEGRACAOPATCBLCOMPPOSICAO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoPatCblCompDebCre',fld:'vCINTEGRACAOPATCBLCOMPDEBCRE'},{av:'AV7cIntegracaoPatCblCompPosicao',fld:'vCINTEGRACAOPATCBLCOMPPOSICAO'},{av:'AV8cIntegracaoPatCblCompCampo',fld:'vCINTEGRACAOPATCBLCOMPCAMPO'},{av:'AV9cIntegracaoPatCblCompUsuarioAlt',fld:'vCINTEGRACAOPATCBLCOMPUSUARIOALT'},{av:'AV10pIntegracaoPatCblEmpresaId',fld:'vPINTEGRACAOPATCBLEMPRESAID',hsh:true},{av:'AV11pIntegracaoPatCblTipoLancam',fld:'vPINTEGRACAOPATCBLTIPOLANCAM',hsh:true},{av:'AV12pIntegracaoPatCblTipoValor',fld:'vPINTEGRACAOPATCBLTIPOVALOR',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoPatCblCompDebCre',fld:'vCINTEGRACAOPATCBLCOMPDEBCRE'},{av:'AV7cIntegracaoPatCblCompPosicao',fld:'vCINTEGRACAOPATCBLCOMPPOSICAO'},{av:'AV8cIntegracaoPatCblCompCampo',fld:'vCINTEGRACAOPATCBLCOMPCAMPO'},{av:'AV9cIntegracaoPatCblCompUsuarioAlt',fld:'vCINTEGRACAOPATCBLCOMPUSUARIOALT'},{av:'AV10pIntegracaoPatCblEmpresaId',fld:'vPINTEGRACAOPATCBLEMPRESAID',hsh:true},{av:'AV11pIntegracaoPatCblTipoLancam',fld:'vPINTEGRACAOPATCBLTIPOLANCAM',hsh:true},{av:'AV12pIntegracaoPatCblTipoValor',fld:'vPINTEGRACAOPATCBLTIPOVALOR',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoPatCblCompDebCre',fld:'vCINTEGRACAOPATCBLCOMPDEBCRE'},{av:'AV7cIntegracaoPatCblCompPosicao',fld:'vCINTEGRACAOPATCBLCOMPPOSICAO'},{av:'AV8cIntegracaoPatCblCompCampo',fld:'vCINTEGRACAOPATCBLCOMPCAMPO'},{av:'AV9cIntegracaoPatCblCompUsuarioAlt',fld:'vCINTEGRACAOPATCBLCOMPUSUARIOALT'},{av:'AV10pIntegracaoPatCblEmpresaId',fld:'vPINTEGRACAOPATCBLEMPRESAID',hsh:true},{av:'AV11pIntegracaoPatCblTipoLancam',fld:'vPINTEGRACAOPATCBLTIPOLANCAM',hsh:true},{av:'AV12pIntegracaoPatCblTipoValor',fld:'vPINTEGRACAOPATCBLTIPOVALOR',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoPatCblCompDebCre',fld:'vCINTEGRACAOPATCBLCOMPDEBCRE'},{av:'AV7cIntegracaoPatCblCompPosicao',fld:'vCINTEGRACAOPATCBLCOMPPOSICAO'},{av:'AV8cIntegracaoPatCblCompCampo',fld:'vCINTEGRACAOPATCBLCOMPCAMPO'},{av:'AV9cIntegracaoPatCblCompUsuarioAlt',fld:'vCINTEGRACAOPATCBLCOMPUSUARIOALT'},{av:'AV10pIntegracaoPatCblEmpresaId',fld:'vPINTEGRACAOPATCBLEMPRESAID',hsh:true},{av:'AV11pIntegracaoPatCblTipoLancam',fld:'vPINTEGRACAOPATCBLTIPOLANCAM',hsh:true},{av:'AV12pIntegracaoPatCblTipoValor',fld:'vPINTEGRACAOPATCBLTIPOVALOR',hsh:true}],[]];
   this.setVCMap("AV10pIntegracaoPatCblEmpresaId", "vPINTEGRACAOPATCBLEMPRESAID", 0, "char");
   this.setVCMap("AV11pIntegracaoPatCblTipoLancam", "vPINTEGRACAOPATCBLTIPOLANCAM", 0, "char");
   this.setVCMap("AV12pIntegracaoPatCblTipoValor", "vPINTEGRACAOPATCBLTIPOVALOR", 0, "char");
   this.setVCMap("AV13pIntegracaoPatCblCompDebCre", "vPINTEGRACAOPATCBLCOMPDEBCRE", 0, "char");
   this.setVCMap("AV14pIntegracaoPatCblCompPosicao", "vPINTEGRACAOPATCBLCOMPPOSICAO", 0, "int");
   this.setVCMap("AV10pIntegracaoPatCblEmpresaId", "vPINTEGRACAOPATCBLEMPRESAID", 0, "char");
   this.setVCMap("AV11pIntegracaoPatCblTipoLancam", "vPINTEGRACAOPATCBLTIPOLANCAM", 0, "char");
   this.setVCMap("AV12pIntegracaoPatCblTipoValor", "vPINTEGRACAOPATCBLTIPOVALOR", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar({rfrVar:"AV10pIntegracaoPatCblEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11pIntegracaoPatCblTipoLancam"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pIntegracaoPatCblTipoValor"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx06y3());
