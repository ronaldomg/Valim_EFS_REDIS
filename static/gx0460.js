/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:27:45.43
*/
gx.evt.autoSkip = false;
gx.define('gx0460', false, function () {
   this.ServerClass =  "gx0460" ;
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
      this.AV13pModeloDocumentoEmpresaId=gx.fn.getControlValue("vPMODELODOCUMENTOEMPRESAID") ;
      this.AV14pModeloDocumentoId=gx.fn.getIntegerValue("vPMODELODOCUMENTOID",'.') ;
      this.AV15pLayoutDocumentoSeq=gx.fn.getIntegerValue("vPLAYOUTDOCUMENTOSEQ",'.') ;
   };
   this.Validv_Clayoutdocumentotamfonte=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLAYOUTDOCUMENTOTAMFONTE");
         this.AnyError  = 0;
         if ( ! ( this.AV11cLayoutDocumentoTamFonte == 1 || this.AV11cLayoutDocumentoTamFonte == 0 || this.AV11cLayoutDocumentoTamFonte == 8 || this.AV11cLayoutDocumentoTamFonte == 9 || this.AV11cLayoutDocumentoTamFonte == 10 || this.AV11cLayoutDocumentoTamFonte == 11 || this.AV11cLayoutDocumentoTamFonte == 12 || this.AV11cLayoutDocumentoTamFonte == 14 || this.AV11cLayoutDocumentoTamFonte == 16 || this.AV11cLayoutDocumentoTamFonte == 58 || this.AV11cLayoutDocumentoTamFonte == 59 || this.AV11cLayoutDocumentoTamFonte == 60 || this.AV11cLayoutDocumentoTamFonte == 61 || this.AV11cLayoutDocumentoTamFonte == 62 || this.AV11cLayoutDocumentoTamFonte == 64 || this.AV11cLayoutDocumentoTamFonte == 66 || this.AV11cLayoutDocumentoTamFonte == 70 || this.AV11cLayoutDocumentoTamFonte == 67 || this.AV11cLayoutDocumentoTamFonte == 68 || this.AV11cLayoutDocumentoTamFonte == 69 || this.AV11cLayoutDocumentoTamFonte == 75 || (0==this.AV11cLayoutDocumentoTamFonte) ) )
         {
            try {
               gxballoon.setError("Campo cLayoutDocumentoTamFonte fora do intervalo");
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
   this.e131kf2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141kf1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,61,64];
   this.GXLastCtrlId =64;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0460",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1023,53,"MODELODOCUMENTOEMPRESAID","Empresa","","ModeloDocumentoEmpresaId","char",0,"px",10,10,"left",null,[],1023,"ModeloDocumentoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1024,54,"MODELODOCUMENTOID","Código do Modelo","","ModeloDocumentoId","int",0,"px",3,3,"right",null,[],1024,"ModeloDocumentoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1284,55,"LAYOUTDOCUMENTOSEQ","Sequência","","LayoutDocumentoSeq","int",0,"px",4,4,"right",null,[],1284,"LayoutDocumentoSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1279,56,"LAYOUTDOCUMENTOLINHAINI","Linha Inicial","","LayoutDocumentoLinhaIni","int",0,"px",4,4,"right",null,[],1279,"LayoutDocumentoLinhaIni",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1280,57,"LAYOUTDOCUMENTOCOLUNAINI","Coluna Inicial","","LayoutDocumentoColunaIni","int",0,"px",4,4,"right",null,[],1280,"LayoutDocumentoColunaIni",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1281,58,"LAYOUTDOCUMENTOTAMFONTE","Tamanho da Fonte","LayoutDocumentoTamFonte","int",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1282,59,"LAYOUTDOCUMENTOQTDECARACTER","Quantidade de Caracteres","","LayoutDocumentoQtdeCaracter","int",0,"px",4,4,"right",null,[],1282,"LayoutDocumentoQtdeCaracter",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(3135,60,"LAYOUTDOCUMENTOBORDA","Borda","LayoutDocumentoBorda","int",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(3136,61,"LAYOUTDOCUMENTODESTACAR","Destacar Fundo","","LayoutDocumentoDestacar","char",0,"px",1,1,"left",null,[],3136,"LayoutDocumentoDestacar",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKMODELODOCUMENTOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMODELODOCUMENTOEMPRESAID",gxz:"ZV6cModeloDocumentoEmpresaId",gxold:"OV6cModeloDocumentoEmpresaId",gxvar:"AV6cModeloDocumentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cModeloDocumentoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cModeloDocumentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCMODELODOCUMENTOEMPRESAID",gx.O.AV6cModeloDocumentoEmpresaId,0)},c2v:function(){gx.O.AV6cModeloDocumentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCMODELODOCUMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKMODELODOCUMENTOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMODELODOCUMENTOID",gxz:"ZV7cModeloDocumentoId",gxold:"OV7cModeloDocumentoId",gxvar:"AV7cModeloDocumentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cModeloDocumentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cModeloDocumentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMODELODOCUMENTOID",gx.O.AV7cModeloDocumentoId,0)},c2v:function(){gx.O.AV7cModeloDocumentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMODELODOCUMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKLAYOUTDOCUMENTOSEQ", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLAYOUTDOCUMENTOSEQ",gxz:"ZV8cLayoutDocumentoSeq",gxold:"OV8cLayoutDocumentoSeq",gxvar:"AV8cLayoutDocumentoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cLayoutDocumentoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cLayoutDocumentoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLAYOUTDOCUMENTOSEQ",gx.O.AV8cLayoutDocumentoSeq,0)},c2v:function(){gx.O.AV8cLayoutDocumentoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLAYOUTDOCUMENTOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKLAYOUTDOCUMENTOLINHAINI", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLAYOUTDOCUMENTOLINHAINI",gxz:"ZV9cLayoutDocumentoLinhaIni",gxold:"OV9cLayoutDocumentoLinhaIni",gxvar:"AV9cLayoutDocumentoLinhaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cLayoutDocumentoLinhaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cLayoutDocumentoLinhaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLAYOUTDOCUMENTOLINHAINI",gx.O.AV9cLayoutDocumentoLinhaIni,0)},c2v:function(){gx.O.AV9cLayoutDocumentoLinhaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLAYOUTDOCUMENTOLINHAINI",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKLAYOUTDOCUMENTOCOLUNAINI", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLAYOUTDOCUMENTOCOLUNAINI",gxz:"ZV10cLayoutDocumentoColunaIni",gxold:"OV10cLayoutDocumentoColunaIni",gxvar:"AV10cLayoutDocumentoColunaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cLayoutDocumentoColunaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cLayoutDocumentoColunaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLAYOUTDOCUMENTOCOLUNAINI",gx.O.AV10cLayoutDocumentoColunaIni,0)},c2v:function(){gx.O.AV10cLayoutDocumentoColunaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLAYOUTDOCUMENTOCOLUNAINI",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKLAYOUTDOCUMENTOTAMFONTE", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Clayoutdocumentotamfonte,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLAYOUTDOCUMENTOTAMFONTE",gxz:"ZV11cLayoutDocumentoTamFonte",gxold:"OV11cLayoutDocumentoTamFonte",gxvar:"AV11cLayoutDocumentoTamFonte",ucs:[],op:[39],ip:[39],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11cLayoutDocumentoTamFonte=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cLayoutDocumentoTamFonte=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCLAYOUTDOCUMENTOTAMFONTE",gx.O.AV11cLayoutDocumentoTamFonte)},c2v:function(){gx.O.AV11cLayoutDocumentoTamFonte=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLAYOUTDOCUMENTOTAMFONTE",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKLAYOUTDOCUMENTOQTDECARACTER", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLAYOUTDOCUMENTOQTDECARACTER",gxz:"ZV12cLayoutDocumentoQtdeCaracter",gxold:"OV12cLayoutDocumentoQtdeCaracter",gxvar:"AV12cLayoutDocumentoQtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cLayoutDocumentoQtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cLayoutDocumentoQtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLAYOUTDOCUMENTOQTDECARACTER",gx.O.AV12cLayoutDocumentoQtdeCaracter,0)},c2v:function(){gx.O.AV12cLayoutDocumentoQtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLAYOUTDOCUMENTOQTDECARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOEMPRESAID",gxz:"Z1023ModeloDocumentoEmpresaId",gxold:"O1023ModeloDocumentoEmpresaId",gxvar:"A1023ModeloDocumentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1023ModeloDocumentoEmpresaId=Value},v2z:function(Value){gx.O.Z1023ModeloDocumentoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("MODELODOCUMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1023ModeloDocumentoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1023ModeloDocumentoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELODOCUMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOID",gxz:"Z1024ModeloDocumentoId",gxold:"O1024ModeloDocumentoId",gxvar:"A1024ModeloDocumentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1024ModeloDocumentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1024ModeloDocumentoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELODOCUMENTOID",row || gx.fn.currentGridRowImpl(51),gx.O.A1024ModeloDocumentoId,0)},c2v:function(){gx.O.A1024ModeloDocumentoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELODOCUMENTOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOSEQ",gxz:"Z1284LayoutDocumentoSeq",gxold:"O1284LayoutDocumentoSeq",gxvar:"A1284LayoutDocumentoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1284LayoutDocumentoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1284LayoutDocumentoSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LAYOUTDOCUMENTOSEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A1284LayoutDocumentoSeq,0)},c2v:function(){gx.O.A1284LayoutDocumentoSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LAYOUTDOCUMENTOSEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOLINHAINI",gxz:"Z1279LayoutDocumentoLinhaIni",gxold:"O1279LayoutDocumentoLinhaIni",gxvar:"A1279LayoutDocumentoLinhaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1279LayoutDocumentoLinhaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1279LayoutDocumentoLinhaIni=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LAYOUTDOCUMENTOLINHAINI",row || gx.fn.currentGridRowImpl(51),gx.O.A1279LayoutDocumentoLinhaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1279LayoutDocumentoLinhaIni=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LAYOUTDOCUMENTOLINHAINI",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOCOLUNAINI",gxz:"Z1280LayoutDocumentoColunaIni",gxold:"O1280LayoutDocumentoColunaIni",gxvar:"A1280LayoutDocumentoColunaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1280LayoutDocumentoColunaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1280LayoutDocumentoColunaIni=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LAYOUTDOCUMENTOCOLUNAINI",row || gx.fn.currentGridRowImpl(51),gx.O.A1280LayoutDocumentoColunaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1280LayoutDocumentoColunaIni=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LAYOUTDOCUMENTOCOLUNAINI",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOTAMFONTE",gxz:"Z1281LayoutDocumentoTamFonte",gxold:"O1281LayoutDocumentoTamFonte",gxvar:"A1281LayoutDocumentoTamFonte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1281LayoutDocumentoTamFonte=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1281LayoutDocumentoTamFonte=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("LAYOUTDOCUMENTOTAMFONTE",row || gx.fn.currentGridRowImpl(51),gx.O.A1281LayoutDocumentoTamFonte);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1281LayoutDocumentoTamFonte=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LAYOUTDOCUMENTOTAMFONTE",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOQTDECARACTER",gxz:"Z1282LayoutDocumentoQtdeCaracter",gxold:"O1282LayoutDocumentoQtdeCaracter",gxvar:"A1282LayoutDocumentoQtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1282LayoutDocumentoQtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1282LayoutDocumentoQtdeCaracter=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LAYOUTDOCUMENTOQTDECARACTER",row || gx.fn.currentGridRowImpl(51),gx.O.A1282LayoutDocumentoQtdeCaracter,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1282LayoutDocumentoQtdeCaracter=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LAYOUTDOCUMENTOQTDECARACTER",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOBORDA",gxz:"Z3135LayoutDocumentoBorda",gxold:"O3135LayoutDocumentoBorda",gxvar:"A3135LayoutDocumentoBorda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3135LayoutDocumentoBorda=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3135LayoutDocumentoBorda=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("LAYOUTDOCUMENTOBORDA",row || gx.fn.currentGridRowImpl(51),gx.O.A3135LayoutDocumentoBorda);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3135LayoutDocumentoBorda=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LAYOUTDOCUMENTOBORDA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTODESTACAR",gxz:"Z3136LayoutDocumentoDestacar",gxold:"O3136LayoutDocumentoDestacar",gxvar:"A3136LayoutDocumentoDestacar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3136LayoutDocumentoDestacar=Value},v2z:function(Value){gx.O.Z3136LayoutDocumentoDestacar=Value},v2c:function(row){gx.fn.setGridControlValue("LAYOUTDOCUMENTODESTACAR",row || gx.fn.currentGridRowImpl(51),gx.O.A3136LayoutDocumentoDestacar,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3136LayoutDocumentoDestacar=this.val()},val:function(row){return gx.fn.getGridControlValue("LAYOUTDOCUMENTODESTACAR",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TABLE4",grid:0};
   this.AV6cModeloDocumentoEmpresaId = "" ;
   this.ZV6cModeloDocumentoEmpresaId = "" ;
   this.OV6cModeloDocumentoEmpresaId = "" ;
   this.AV7cModeloDocumentoId = 0 ;
   this.ZV7cModeloDocumentoId = 0 ;
   this.OV7cModeloDocumentoId = 0 ;
   this.AV8cLayoutDocumentoSeq = 0 ;
   this.ZV8cLayoutDocumentoSeq = 0 ;
   this.OV8cLayoutDocumentoSeq = 0 ;
   this.AV9cLayoutDocumentoLinhaIni = 0 ;
   this.ZV9cLayoutDocumentoLinhaIni = 0 ;
   this.OV9cLayoutDocumentoLinhaIni = 0 ;
   this.AV10cLayoutDocumentoColunaIni = 0 ;
   this.ZV10cLayoutDocumentoColunaIni = 0 ;
   this.OV10cLayoutDocumentoColunaIni = 0 ;
   this.AV11cLayoutDocumentoTamFonte = 0 ;
   this.ZV11cLayoutDocumentoTamFonte = 0 ;
   this.OV11cLayoutDocumentoTamFonte = 0 ;
   this.AV12cLayoutDocumentoQtdeCaracter = 0 ;
   this.ZV12cLayoutDocumentoQtdeCaracter = 0 ;
   this.OV12cLayoutDocumentoQtdeCaracter = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1023ModeloDocumentoEmpresaId = "" ;
   this.O1023ModeloDocumentoEmpresaId = "" ;
   this.Z1024ModeloDocumentoId = 0 ;
   this.O1024ModeloDocumentoId = 0 ;
   this.Z1284LayoutDocumentoSeq = 0 ;
   this.O1284LayoutDocumentoSeq = 0 ;
   this.Z1279LayoutDocumentoLinhaIni = 0 ;
   this.O1279LayoutDocumentoLinhaIni = 0 ;
   this.Z1280LayoutDocumentoColunaIni = 0 ;
   this.O1280LayoutDocumentoColunaIni = 0 ;
   this.Z1281LayoutDocumentoTamFonte = 0 ;
   this.O1281LayoutDocumentoTamFonte = 0 ;
   this.Z1282LayoutDocumentoQtdeCaracter = 0 ;
   this.O1282LayoutDocumentoQtdeCaracter = 0 ;
   this.Z3135LayoutDocumentoBorda = 0 ;
   this.O3135LayoutDocumentoBorda = 0 ;
   this.Z3136LayoutDocumentoDestacar = "" ;
   this.O3136LayoutDocumentoDestacar = "" ;
   this.AV6cModeloDocumentoEmpresaId = "" ;
   this.AV7cModeloDocumentoId = 0 ;
   this.AV8cLayoutDocumentoSeq = 0 ;
   this.AV9cLayoutDocumentoLinhaIni = 0 ;
   this.AV10cLayoutDocumentoColunaIni = 0 ;
   this.AV11cLayoutDocumentoTamFonte = 0 ;
   this.AV12cLayoutDocumentoQtdeCaracter = 0 ;
   this.AV13pModeloDocumentoEmpresaId = "" ;
   this.AV14pModeloDocumentoId = 0 ;
   this.AV15pLayoutDocumentoSeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A1023ModeloDocumentoEmpresaId = "" ;
   this.A1024ModeloDocumentoId = 0 ;
   this.A1284LayoutDocumentoSeq = 0 ;
   this.A1279LayoutDocumentoLinhaIni = 0 ;
   this.A1280LayoutDocumentoColunaIni = 0 ;
   this.A1281LayoutDocumentoTamFonte = 0 ;
   this.A1282LayoutDocumentoQtdeCaracter = 0 ;
   this.A3135LayoutDocumentoBorda = 0 ;
   this.A3136LayoutDocumentoDestacar = "" ;
   this.Events = {"e131kf2_client": ["ENTER", true] ,"e141kf1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloDocumentoEmpresaId',fld:'vCMODELODOCUMENTOEMPRESAID'},{av:'AV7cModeloDocumentoId',fld:'vCMODELODOCUMENTOID'},{av:'AV8cLayoutDocumentoSeq',fld:'vCLAYOUTDOCUMENTOSEQ'},{av:'AV9cLayoutDocumentoLinhaIni',fld:'vCLAYOUTDOCUMENTOLINHAINI'},{av:'AV10cLayoutDocumentoColunaIni',fld:'vCLAYOUTDOCUMENTOCOLUNAINI'},{av:'AV11cLayoutDocumentoTamFonte',fld:'vCLAYOUTDOCUMENTOTAMFONTE'},{av:'AV12cLayoutDocumentoQtdeCaracter',fld:'vCLAYOUTDOCUMENTOQTDECARACTER'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1023ModeloDocumentoEmpresaId',fld:'MODELODOCUMENTOEMPRESAID'},{av:'A1024ModeloDocumentoId',fld:'MODELODOCUMENTOID'},{av:'A1284LayoutDocumentoSeq',fld:'LAYOUTDOCUMENTOSEQ'}],[{av:'AV13pModeloDocumentoEmpresaId',fld:'vPMODELODOCUMENTOEMPRESAID'},{av:'AV14pModeloDocumentoId',fld:'vPMODELODOCUMENTOID'},{av:'AV15pLayoutDocumentoSeq',fld:'vPLAYOUTDOCUMENTOSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloDocumentoEmpresaId',fld:'vCMODELODOCUMENTOEMPRESAID'},{av:'AV7cModeloDocumentoId',fld:'vCMODELODOCUMENTOID'},{av:'AV8cLayoutDocumentoSeq',fld:'vCLAYOUTDOCUMENTOSEQ'},{av:'AV9cLayoutDocumentoLinhaIni',fld:'vCLAYOUTDOCUMENTOLINHAINI'},{av:'AV10cLayoutDocumentoColunaIni',fld:'vCLAYOUTDOCUMENTOCOLUNAINI'},{av:'AV11cLayoutDocumentoTamFonte',fld:'vCLAYOUTDOCUMENTOTAMFONTE'},{av:'AV12cLayoutDocumentoQtdeCaracter',fld:'vCLAYOUTDOCUMENTOQTDECARACTER'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloDocumentoEmpresaId',fld:'vCMODELODOCUMENTOEMPRESAID'},{av:'AV7cModeloDocumentoId',fld:'vCMODELODOCUMENTOID'},{av:'AV8cLayoutDocumentoSeq',fld:'vCLAYOUTDOCUMENTOSEQ'},{av:'AV9cLayoutDocumentoLinhaIni',fld:'vCLAYOUTDOCUMENTOLINHAINI'},{av:'AV10cLayoutDocumentoColunaIni',fld:'vCLAYOUTDOCUMENTOCOLUNAINI'},{av:'AV11cLayoutDocumentoTamFonte',fld:'vCLAYOUTDOCUMENTOTAMFONTE'},{av:'AV12cLayoutDocumentoQtdeCaracter',fld:'vCLAYOUTDOCUMENTOQTDECARACTER'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloDocumentoEmpresaId',fld:'vCMODELODOCUMENTOEMPRESAID'},{av:'AV7cModeloDocumentoId',fld:'vCMODELODOCUMENTOID'},{av:'AV8cLayoutDocumentoSeq',fld:'vCLAYOUTDOCUMENTOSEQ'},{av:'AV9cLayoutDocumentoLinhaIni',fld:'vCLAYOUTDOCUMENTOLINHAINI'},{av:'AV10cLayoutDocumentoColunaIni',fld:'vCLAYOUTDOCUMENTOCOLUNAINI'},{av:'AV11cLayoutDocumentoTamFonte',fld:'vCLAYOUTDOCUMENTOTAMFONTE'},{av:'AV12cLayoutDocumentoQtdeCaracter',fld:'vCLAYOUTDOCUMENTOQTDECARACTER'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloDocumentoEmpresaId',fld:'vCMODELODOCUMENTOEMPRESAID'},{av:'AV7cModeloDocumentoId',fld:'vCMODELODOCUMENTOID'},{av:'AV8cLayoutDocumentoSeq',fld:'vCLAYOUTDOCUMENTOSEQ'},{av:'AV9cLayoutDocumentoLinhaIni',fld:'vCLAYOUTDOCUMENTOLINHAINI'},{av:'AV10cLayoutDocumentoColunaIni',fld:'vCLAYOUTDOCUMENTOCOLUNAINI'},{av:'AV11cLayoutDocumentoTamFonte',fld:'vCLAYOUTDOCUMENTOTAMFONTE'},{av:'AV12cLayoutDocumentoQtdeCaracter',fld:'vCLAYOUTDOCUMENTOQTDECARACTER'}],[]];
   this.setVCMap("AV13pModeloDocumentoEmpresaId", "vPMODELODOCUMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV14pModeloDocumentoId", "vPMODELODOCUMENTOID", 0, "int");
   this.setVCMap("AV15pLayoutDocumentoSeq", "vPLAYOUTDOCUMENTOSEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0460());
