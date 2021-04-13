/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:28:2.73
*/
gx.evt.autoSkip = false;
gx.define('gx04d0', false, function () {
   this.ServerClass =  "gx04d0" ;
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
      this.AV13pIntegracaoCblEmpresaId=gx.fn.getControlValue("vPINTEGRACAOCBLEMPRESAID") ;
      this.AV14pIntegracaoCblId=gx.fn.getIntegerValue("vPINTEGRACAOCBLID",'.') ;
   };
   this.Validv_Cintegracaocbltipocontadebito=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCINTEGRACAOCBLTIPOCONTADEBITO");
         this.AnyError  = 0;
         if ( ! ( this.AV10cIntegracaoCblTipoContaDebito == "0" || this.AV10cIntegracaoCblTipoContaDebito == "1" || this.AV10cIntegracaoCblTipoContaDebito == "2" || this.AV10cIntegracaoCblTipoContaDebito == "3" || this.AV10cIntegracaoCblTipoContaDebito == "4" || this.AV10cIntegracaoCblTipoContaDebito == "5" || this.AV10cIntegracaoCblTipoContaDebito == "6" || this.AV10cIntegracaoCblTipoContaDebito == "7" || this.AV10cIntegracaoCblTipoContaDebito == "8" || (""==this.AV10cIntegracaoCblTipoContaDebito) ) )
         {
            try {
               gxballoon.setError("Campo cIntegracaoCblTipoContaDebito fora do intervalo");
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
   this.e131km2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141km1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,61,64];
   this.GXLastCtrlId =64;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx04d0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1486,53,"INTEGRACAOCBLEMPRESAID","Empresa","","IntegracaoCblEmpresaId","char",0,"px",10,10,"left",null,[],1486,"IntegracaoCblEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1487,54,"INTEGRACAOCBLID","Código","","IntegracaoCblId","int",0,"px",4,4,"right",null,[],1487,"IntegracaoCblId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1450,55,"INTEGRACAOCBLTIPOPARTIDA","Tipo Partida","IntegracaoCblTipoPartida","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1451,56,"INTEGRACAOCBLSNCOPIARATEIO","Copia Rateio","","IntegracaoCblSnCopiaRateio","char",0,"px",1,1,"left",null,[],1451,"IntegracaoCblSnCopiaRateio",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1452,57,"INTEGRACAOCBLTIPOCONTADEBITO","Tipo Conta Débito","IntegracaoCblTipoContaDebito","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1453,58,"INTEGRACAOCBLCCONTABILDEBEMPID","Empresa","","IntegracaoCblCContabilDebEmpId","char",0,"px",10,10,"left",null,[],1453,"IntegracaoCblCContabilDebEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1454,59,"INTEGRACAOCBLCCONTABILDEBID","Conta Contábil Débito","","IntegracaoCblCContabilDebId","svchar",0,"px",30,30,"left",null,[],1454,"IntegracaoCblCContabilDebId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1456,60,"INTEGRACAOCBLHISDEBEMPRESAID","Empresa","","IntegracaoCblHisDebEmpresaId","char",0,"px",10,10,"left",null,[],1456,"IntegracaoCblHisDebEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1457,61,"INTEGRACAOCBLHISDEBID","Histórico Débito","","IntegracaoCblHisDebId","int",0,"px",7,7,"right",null,[],1457,"IntegracaoCblHisDebId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKINTEGRACAOCBLEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCBLEMPRESAID",gxz:"ZV6cIntegracaoCblEmpresaId",gxold:"OV6cIntegracaoCblEmpresaId",gxvar:"AV6cIntegracaoCblEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cIntegracaoCblEmpresaId=Value},v2z:function(Value){gx.O.ZV6cIntegracaoCblEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCBLEMPRESAID",gx.O.AV6cIntegracaoCblEmpresaId,0)},c2v:function(){gx.O.AV6cIntegracaoCblEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOCBLEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKINTEGRACAOCBLID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCBLID",gxz:"ZV7cIntegracaoCblId",gxold:"OV7cIntegracaoCblId",gxvar:"AV7cIntegracaoCblId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cIntegracaoCblId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cIntegracaoCblId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCBLID",gx.O.AV7cIntegracaoCblId,0)},c2v:function(){gx.O.AV7cIntegracaoCblId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCINTEGRACAOCBLID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKINTEGRACAOCBLTIPOPARTIDA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCBLTIPOPARTIDA",gxz:"ZV8cIntegracaoCblTipoPartida",gxold:"OV8cIntegracaoCblTipoPartida",gxvar:"AV8cIntegracaoCblTipoPartida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cIntegracaoCblTipoPartida=Value},v2z:function(Value){gx.O.ZV8cIntegracaoCblTipoPartida=Value},v2c:function(){gx.fn.setComboBoxValue("vCINTEGRACAOCBLTIPOPARTIDA",gx.O.AV8cIntegracaoCblTipoPartida)},c2v:function(){gx.O.AV8cIntegracaoCblTipoPartida=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOCBLTIPOPARTIDA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKINTEGRACAOCBLSNCOPIARATEIO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCBLSNCOPIARATEIO",gxz:"ZV9cIntegracaoCblSnCopiaRateio",gxold:"OV9cIntegracaoCblSnCopiaRateio",gxvar:"AV9cIntegracaoCblSnCopiaRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cIntegracaoCblSnCopiaRateio=Value},v2z:function(Value){gx.O.ZV9cIntegracaoCblSnCopiaRateio=Value},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCBLSNCOPIARATEIO",gx.O.AV9cIntegracaoCblSnCopiaRateio,0)},c2v:function(){gx.O.AV9cIntegracaoCblSnCopiaRateio=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOCBLSNCOPIARATEIO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKINTEGRACAOCBLTIPOCONTADEBITO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cintegracaocbltipocontadebito,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCBLTIPOCONTADEBITO",gxz:"ZV10cIntegracaoCblTipoContaDebito",gxold:"OV10cIntegracaoCblTipoContaDebito",gxvar:"AV10cIntegracaoCblTipoContaDebito",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cIntegracaoCblTipoContaDebito=Value},v2z:function(Value){gx.O.ZV10cIntegracaoCblTipoContaDebito=Value},v2c:function(){gx.fn.setComboBoxValue("vCINTEGRACAOCBLTIPOCONTADEBITO",gx.O.AV10cIntegracaoCblTipoContaDebito)},c2v:function(){gx.O.AV10cIntegracaoCblTipoContaDebito=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOCBLTIPOCONTADEBITO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKINTEGRACAOCBLCCONTABILDEBEMPID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCBLCCONTABILDEBEMPID",gxz:"ZV11cIntegracaoCblCContabilDebEmpId",gxold:"OV11cIntegracaoCblCContabilDebEmpId",gxvar:"AV11cIntegracaoCblCContabilDebEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cIntegracaoCblCContabilDebEmpId=Value},v2z:function(Value){gx.O.ZV11cIntegracaoCblCContabilDebEmpId=Value},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCBLCCONTABILDEBEMPID",gx.O.AV11cIntegracaoCblCContabilDebEmpId,0)},c2v:function(){gx.O.AV11cIntegracaoCblCContabilDebEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOCBLCCONTABILDEBEMPID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKINTEGRACAOCBLCCONTABILDEBID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCBLCCONTABILDEBID",gxz:"ZV12cIntegracaoCblCContabilDebId",gxold:"OV12cIntegracaoCblCContabilDebId",gxvar:"AV12cIntegracaoCblCContabilDebId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cIntegracaoCblCContabilDebId=Value},v2z:function(Value){gx.O.ZV12cIntegracaoCblCContabilDebId=Value},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCBLCCONTABILDEBID",gx.O.AV12cIntegracaoCblCContabilDebId,0)},c2v:function(){gx.O.AV12cIntegracaoCblCContabilDebId=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOCBLCCONTABILDEBID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLEMPRESAID",gxz:"Z1486IntegracaoCblEmpresaId",gxold:"O1486IntegracaoCblEmpresaId",gxvar:"A1486IntegracaoCblEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1486IntegracaoCblEmpresaId=Value},v2z:function(Value){gx.O.Z1486IntegracaoCblEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1486IntegracaoCblEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1486IntegracaoCblEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOCBLEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLID",gxz:"Z1487IntegracaoCblId",gxold:"O1487IntegracaoCblId",gxvar:"A1487IntegracaoCblId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1487IntegracaoCblId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1487IntegracaoCblId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLID",row || gx.fn.currentGridRowImpl(51),gx.O.A1487IntegracaoCblId,0)},c2v:function(){gx.O.A1487IntegracaoCblId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INTEGRACAOCBLID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLTIPOPARTIDA",gxz:"Z1450IntegracaoCblTipoPartida",gxold:"O1450IntegracaoCblTipoPartida",gxvar:"A1450IntegracaoCblTipoPartida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1450IntegracaoCblTipoPartida=Value},v2z:function(Value){gx.O.Z1450IntegracaoCblTipoPartida=Value},v2c:function(row){gx.fn.setGridComboBoxValue("INTEGRACAOCBLTIPOPARTIDA",row || gx.fn.currentGridRowImpl(51),gx.O.A1450IntegracaoCblTipoPartida)},c2v:function(){gx.O.A1450IntegracaoCblTipoPartida=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOCBLTIPOPARTIDA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLSNCOPIARATEIO",gxz:"Z1451IntegracaoCblSnCopiaRateio",gxold:"O1451IntegracaoCblSnCopiaRateio",gxvar:"A1451IntegracaoCblSnCopiaRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1451IntegracaoCblSnCopiaRateio=Value},v2z:function(Value){gx.O.Z1451IntegracaoCblSnCopiaRateio=Value},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLSNCOPIARATEIO",row || gx.fn.currentGridRowImpl(51),gx.O.A1451IntegracaoCblSnCopiaRateio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1451IntegracaoCblSnCopiaRateio=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOCBLSNCOPIARATEIO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLTIPOCONTADEBITO",gxz:"Z1452IntegracaoCblTipoContaDebito",gxold:"O1452IntegracaoCblTipoContaDebito",gxvar:"A1452IntegracaoCblTipoContaDebito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1452IntegracaoCblTipoContaDebito=Value},v2z:function(Value){gx.O.Z1452IntegracaoCblTipoContaDebito=Value},v2c:function(row){gx.fn.setGridComboBoxValue("INTEGRACAOCBLTIPOCONTADEBITO",row || gx.fn.currentGridRowImpl(51),gx.O.A1452IntegracaoCblTipoContaDebito);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1452IntegracaoCblTipoContaDebito=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOCBLTIPOCONTADEBITO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLCCONTABILDEBEMPID",gxz:"Z1453IntegracaoCblCContabilDebEmpId",gxold:"O1453IntegracaoCblCContabilDebEmpId",gxvar:"A1453IntegracaoCblCContabilDebEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1453IntegracaoCblCContabilDebEmpId=Value},v2z:function(Value){gx.O.Z1453IntegracaoCblCContabilDebEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLCCONTABILDEBEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A1453IntegracaoCblCContabilDebEmpId,0)},c2v:function(){gx.O.A1453IntegracaoCblCContabilDebEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOCBLCCONTABILDEBEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLCCONTABILDEBID",gxz:"Z1454IntegracaoCblCContabilDebId",gxold:"O1454IntegracaoCblCContabilDebId",gxvar:"A1454IntegracaoCblCContabilDebId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1454IntegracaoCblCContabilDebId=Value},v2z:function(Value){gx.O.Z1454IntegracaoCblCContabilDebId=Value},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLCCONTABILDEBID",row || gx.fn.currentGridRowImpl(51),gx.O.A1454IntegracaoCblCContabilDebId,0)},c2v:function(){gx.O.A1454IntegracaoCblCContabilDebId=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOCBLCCONTABILDEBID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLHISDEBEMPRESAID",gxz:"Z1456IntegracaoCblHisDebEmpresaId",gxold:"O1456IntegracaoCblHisDebEmpresaId",gxvar:"A1456IntegracaoCblHisDebEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1456IntegracaoCblHisDebEmpresaId=Value},v2z:function(Value){gx.O.Z1456IntegracaoCblHisDebEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLHISDEBEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1456IntegracaoCblHisDebEmpresaId,0)},c2v:function(){gx.O.A1456IntegracaoCblHisDebEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOCBLHISDEBEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLHISDEBID",gxz:"Z1457IntegracaoCblHisDebId",gxold:"O1457IntegracaoCblHisDebId",gxvar:"A1457IntegracaoCblHisDebId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1457IntegracaoCblHisDebId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1457IntegracaoCblHisDebId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLHISDEBID",row || gx.fn.currentGridRowImpl(51),gx.O.A1457IntegracaoCblHisDebId,0)},c2v:function(){gx.O.A1457IntegracaoCblHisDebId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INTEGRACAOCBLHISDEBID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TABLE4",grid:0};
   this.AV6cIntegracaoCblEmpresaId = "" ;
   this.ZV6cIntegracaoCblEmpresaId = "" ;
   this.OV6cIntegracaoCblEmpresaId = "" ;
   this.AV7cIntegracaoCblId = 0 ;
   this.ZV7cIntegracaoCblId = 0 ;
   this.OV7cIntegracaoCblId = 0 ;
   this.AV8cIntegracaoCblTipoPartida = "" ;
   this.ZV8cIntegracaoCblTipoPartida = "" ;
   this.OV8cIntegracaoCblTipoPartida = "" ;
   this.AV9cIntegracaoCblSnCopiaRateio = "" ;
   this.ZV9cIntegracaoCblSnCopiaRateio = "" ;
   this.OV9cIntegracaoCblSnCopiaRateio = "" ;
   this.AV10cIntegracaoCblTipoContaDebito = "" ;
   this.ZV10cIntegracaoCblTipoContaDebito = "" ;
   this.OV10cIntegracaoCblTipoContaDebito = "" ;
   this.AV11cIntegracaoCblCContabilDebEmpId = "" ;
   this.ZV11cIntegracaoCblCContabilDebEmpId = "" ;
   this.OV11cIntegracaoCblCContabilDebEmpId = "" ;
   this.AV12cIntegracaoCblCContabilDebId = "" ;
   this.ZV12cIntegracaoCblCContabilDebId = "" ;
   this.OV12cIntegracaoCblCContabilDebId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1486IntegracaoCblEmpresaId = "" ;
   this.O1486IntegracaoCblEmpresaId = "" ;
   this.Z1487IntegracaoCblId = 0 ;
   this.O1487IntegracaoCblId = 0 ;
   this.Z1450IntegracaoCblTipoPartida = "" ;
   this.O1450IntegracaoCblTipoPartida = "" ;
   this.Z1451IntegracaoCblSnCopiaRateio = "" ;
   this.O1451IntegracaoCblSnCopiaRateio = "" ;
   this.Z1452IntegracaoCblTipoContaDebito = "" ;
   this.O1452IntegracaoCblTipoContaDebito = "" ;
   this.Z1453IntegracaoCblCContabilDebEmpId = "" ;
   this.O1453IntegracaoCblCContabilDebEmpId = "" ;
   this.Z1454IntegracaoCblCContabilDebId = "" ;
   this.O1454IntegracaoCblCContabilDebId = "" ;
   this.Z1456IntegracaoCblHisDebEmpresaId = "" ;
   this.O1456IntegracaoCblHisDebEmpresaId = "" ;
   this.Z1457IntegracaoCblHisDebId = 0 ;
   this.O1457IntegracaoCblHisDebId = 0 ;
   this.AV6cIntegracaoCblEmpresaId = "" ;
   this.AV7cIntegracaoCblId = 0 ;
   this.AV8cIntegracaoCblTipoPartida = "" ;
   this.AV9cIntegracaoCblSnCopiaRateio = "" ;
   this.AV10cIntegracaoCblTipoContaDebito = "" ;
   this.AV11cIntegracaoCblCContabilDebEmpId = "" ;
   this.AV12cIntegracaoCblCContabilDebId = "" ;
   this.AV13pIntegracaoCblEmpresaId = "" ;
   this.AV14pIntegracaoCblId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A1486IntegracaoCblEmpresaId = "" ;
   this.A1487IntegracaoCblId = 0 ;
   this.A1450IntegracaoCblTipoPartida = "" ;
   this.A1451IntegracaoCblSnCopiaRateio = "" ;
   this.A1452IntegracaoCblTipoContaDebito = "" ;
   this.A1453IntegracaoCblCContabilDebEmpId = "" ;
   this.A1454IntegracaoCblCContabilDebId = "" ;
   this.A1456IntegracaoCblHisDebEmpresaId = "" ;
   this.A1457IntegracaoCblHisDebId = 0 ;
   this.Events = {"e131km2_client": ["ENTER", true] ,"e141km1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoCblEmpresaId',fld:'vCINTEGRACAOCBLEMPRESAID'},{av:'AV7cIntegracaoCblId',fld:'vCINTEGRACAOCBLID'},{av:'AV8cIntegracaoCblTipoPartida',fld:'vCINTEGRACAOCBLTIPOPARTIDA'},{av:'AV9cIntegracaoCblSnCopiaRateio',fld:'vCINTEGRACAOCBLSNCOPIARATEIO'},{av:'AV10cIntegracaoCblTipoContaDebito',fld:'vCINTEGRACAOCBLTIPOCONTADEBITO'},{av:'AV11cIntegracaoCblCContabilDebEmpId',fld:'vCINTEGRACAOCBLCCONTABILDEBEMPID'},{av:'AV12cIntegracaoCblCContabilDebId',fld:'vCINTEGRACAOCBLCCONTABILDEBID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1486IntegracaoCblEmpresaId',fld:'INTEGRACAOCBLEMPRESAID'},{av:'A1487IntegracaoCblId',fld:'INTEGRACAOCBLID'}],[{av:'AV13pIntegracaoCblEmpresaId',fld:'vPINTEGRACAOCBLEMPRESAID'},{av:'AV14pIntegracaoCblId',fld:'vPINTEGRACAOCBLID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoCblEmpresaId',fld:'vCINTEGRACAOCBLEMPRESAID'},{av:'AV7cIntegracaoCblId',fld:'vCINTEGRACAOCBLID'},{av:'AV8cIntegracaoCblTipoPartida',fld:'vCINTEGRACAOCBLTIPOPARTIDA'},{av:'AV9cIntegracaoCblSnCopiaRateio',fld:'vCINTEGRACAOCBLSNCOPIARATEIO'},{av:'AV10cIntegracaoCblTipoContaDebito',fld:'vCINTEGRACAOCBLTIPOCONTADEBITO'},{av:'AV11cIntegracaoCblCContabilDebEmpId',fld:'vCINTEGRACAOCBLCCONTABILDEBEMPID'},{av:'AV12cIntegracaoCblCContabilDebId',fld:'vCINTEGRACAOCBLCCONTABILDEBID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoCblEmpresaId',fld:'vCINTEGRACAOCBLEMPRESAID'},{av:'AV7cIntegracaoCblId',fld:'vCINTEGRACAOCBLID'},{av:'AV8cIntegracaoCblTipoPartida',fld:'vCINTEGRACAOCBLTIPOPARTIDA'},{av:'AV9cIntegracaoCblSnCopiaRateio',fld:'vCINTEGRACAOCBLSNCOPIARATEIO'},{av:'AV10cIntegracaoCblTipoContaDebito',fld:'vCINTEGRACAOCBLTIPOCONTADEBITO'},{av:'AV11cIntegracaoCblCContabilDebEmpId',fld:'vCINTEGRACAOCBLCCONTABILDEBEMPID'},{av:'AV12cIntegracaoCblCContabilDebId',fld:'vCINTEGRACAOCBLCCONTABILDEBID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoCblEmpresaId',fld:'vCINTEGRACAOCBLEMPRESAID'},{av:'AV7cIntegracaoCblId',fld:'vCINTEGRACAOCBLID'},{av:'AV8cIntegracaoCblTipoPartida',fld:'vCINTEGRACAOCBLTIPOPARTIDA'},{av:'AV9cIntegracaoCblSnCopiaRateio',fld:'vCINTEGRACAOCBLSNCOPIARATEIO'},{av:'AV10cIntegracaoCblTipoContaDebito',fld:'vCINTEGRACAOCBLTIPOCONTADEBITO'},{av:'AV11cIntegracaoCblCContabilDebEmpId',fld:'vCINTEGRACAOCBLCCONTABILDEBEMPID'},{av:'AV12cIntegracaoCblCContabilDebId',fld:'vCINTEGRACAOCBLCCONTABILDEBID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoCblEmpresaId',fld:'vCINTEGRACAOCBLEMPRESAID'},{av:'AV7cIntegracaoCblId',fld:'vCINTEGRACAOCBLID'},{av:'AV8cIntegracaoCblTipoPartida',fld:'vCINTEGRACAOCBLTIPOPARTIDA'},{av:'AV9cIntegracaoCblSnCopiaRateio',fld:'vCINTEGRACAOCBLSNCOPIARATEIO'},{av:'AV10cIntegracaoCblTipoContaDebito',fld:'vCINTEGRACAOCBLTIPOCONTADEBITO'},{av:'AV11cIntegracaoCblCContabilDebEmpId',fld:'vCINTEGRACAOCBLCCONTABILDEBEMPID'},{av:'AV12cIntegracaoCblCContabilDebId',fld:'vCINTEGRACAOCBLCCONTABILDEBID'}],[]];
   this.setVCMap("AV13pIntegracaoCblEmpresaId", "vPINTEGRACAOCBLEMPRESAID", 0, "char");
   this.setVCMap("AV14pIntegracaoCblId", "vPINTEGRACAOCBLID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx04d0());
