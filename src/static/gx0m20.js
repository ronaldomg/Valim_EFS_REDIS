/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:48:23.90
*/
gx.evt.autoSkip = false;
gx.define('gx0m20', false, function () {
   this.ServerClass =  "gx0m20" ;
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
      this.AV13pSaidaEmpresaId=gx.fn.getControlValue("vPSAIDAEMPRESAID") ;
      this.AV14pSaidaId=gx.fn.getIntegerValue("vPSAIDAID",'.') ;
      this.AV15pSaidaDocumentoRefSequencia=gx.fn.getIntegerValue("vPSAIDADOCUMENTOREFSEQUENCIA",'.') ;
   };
   this.Validv_Csaidadocumentorefcoduf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCSAIDADOCUMENTOREFCODUF");
         this.AnyError  = 0;
         if ( ! ( this.AV11cSaidaDocumentoRefCodUf == 0 || this.AV11cSaidaDocumentoRefCodUf == 12 || this.AV11cSaidaDocumentoRefCodUf == 27 || this.AV11cSaidaDocumentoRefCodUf == 16 || this.AV11cSaidaDocumentoRefCodUf == 13 || this.AV11cSaidaDocumentoRefCodUf == 29 || this.AV11cSaidaDocumentoRefCodUf == 23 || this.AV11cSaidaDocumentoRefCodUf == 53 || this.AV11cSaidaDocumentoRefCodUf == 32 || this.AV11cSaidaDocumentoRefCodUf == 52 || this.AV11cSaidaDocumentoRefCodUf == 21 || this.AV11cSaidaDocumentoRefCodUf == 51 || this.AV11cSaidaDocumentoRefCodUf == 50 || this.AV11cSaidaDocumentoRefCodUf == 31 || this.AV11cSaidaDocumentoRefCodUf == 15 || this.AV11cSaidaDocumentoRefCodUf == 41 || this.AV11cSaidaDocumentoRefCodUf == 25 || this.AV11cSaidaDocumentoRefCodUf == 26 || this.AV11cSaidaDocumentoRefCodUf == 22 || this.AV11cSaidaDocumentoRefCodUf == 33 || this.AV11cSaidaDocumentoRefCodUf == 24 || this.AV11cSaidaDocumentoRefCodUf == 43 || this.AV11cSaidaDocumentoRefCodUf == 11 || this.AV11cSaidaDocumentoRefCodUf == 14 || this.AV11cSaidaDocumentoRefCodUf == 42 || this.AV11cSaidaDocumentoRefCodUf == 35 || this.AV11cSaidaDocumentoRefCodUf == 28 || this.AV11cSaidaDocumentoRefCodUf == 17 || (0==this.AV11cSaidaDocumentoRefCodUf) ) )
         {
            try {
               gxballoon.setError("Campo cSaidaDocumentoRefCodUf fora do intervalo");
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
   this.e132g62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142g61_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0m20",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(4306,53,"SAIDAEMPRESAID","Empresa Saída","","SaidaEmpresaId","char",0,"px",10,10,"left",null,[],4306,"SaidaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4307,54,"SAIDAID","Número da Saída","","SaidaId","int",0,"px",10,10,"right",null,[],4307,"SaidaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10773,55,"SAIDADOCUMENTOREFSEQUENCIA","Ref Sequencia","","SaidaDocumentoRefSequencia","int",0,"px",2,2,"right",null,[],10773,"SaidaDocumentoRefSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10774,56,"SAIDADOCUMENTOREFMODELOCOD","Modelo Cod","","SaidaDocumentoRefModeloCod","char",0,"px",2,2,"left",null,[],10774,"SaidaDocumentoRefModeloCod",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(10777,57,"SAIDADOCUMENTOREFCODUF","Cod Uf","SaidaDocumentoRefCodUf","int",null,0,true,false,0,"px","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSAIDAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAEMPRESAID",gxz:"ZV6cSaidaEmpresaId",gxold:"OV6cSaidaEmpresaId",gxvar:"AV6cSaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSaidaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cSaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAEMPRESAID",gx.O.AV6cSaidaEmpresaId,0)},c2v:function(){gx.O.AV6cSaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSAIDAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAID",gxz:"ZV7cSaidaId",gxold:"OV7cSaidaId",gxvar:"AV7cSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDAID",gx.O.AV7cSaidaId,0)},c2v:function(){gx.O.AV7cSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSAIDADOCUMENTOREFSEQUENCIA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDADOCUMENTOREFSEQUENCIA",gxz:"ZV8cSaidaDocumentoRefSequencia",gxold:"OV8cSaidaDocumentoRefSequencia",gxvar:"AV8cSaidaDocumentoRefSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSaidaDocumentoRefSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cSaidaDocumentoRefSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDADOCUMENTOREFSEQUENCIA",gx.O.AV8cSaidaDocumentoRefSequencia,0)},c2v:function(){gx.O.AV8cSaidaDocumentoRefSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDADOCUMENTOREFSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSAIDADOCUMENTOREFMODELOCOD", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDADOCUMENTOREFMODELOCOD",gxz:"ZV9cSaidaDocumentoRefModeloCod",gxold:"OV9cSaidaDocumentoRefModeloCod",gxvar:"AV9cSaidaDocumentoRefModeloCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cSaidaDocumentoRefModeloCod=Value},v2z:function(Value){gx.O.ZV9cSaidaDocumentoRefModeloCod=Value},v2c:function(){gx.fn.setControlValue("vCSAIDADOCUMENTOREFMODELOCOD",gx.O.AV9cSaidaDocumentoRefModeloCod,0)},c2v:function(){gx.O.AV9cSaidaDocumentoRefModeloCod=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDADOCUMENTOREFMODELOCOD")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKSAIDADOCUMENTOREFCHAVE", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDADOCUMENTOREFCHAVE",gxz:"ZV10cSaidaDocumentoRefChave",gxold:"OV10cSaidaDocumentoRefChave",gxvar:"AV10cSaidaDocumentoRefChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cSaidaDocumentoRefChave=Value},v2z:function(Value){gx.O.ZV10cSaidaDocumentoRefChave=Value},v2c:function(){gx.fn.setControlValue("vCSAIDADOCUMENTOREFCHAVE",gx.O.AV10cSaidaDocumentoRefChave,0)},c2v:function(){gx.O.AV10cSaidaDocumentoRefChave=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDADOCUMENTOREFCHAVE")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDADOCUMENTOREFCODUF", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Csaidadocumentorefcoduf,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDADOCUMENTOREFCODUF",gxz:"ZV11cSaidaDocumentoRefCodUf",gxold:"OV11cSaidaDocumentoRefCodUf",gxvar:"AV11cSaidaDocumentoRefCodUf",ucs:[],op:[39],ip:[39],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11cSaidaDocumentoRefCodUf=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cSaidaDocumentoRefCodUf=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCSAIDADOCUMENTOREFCODUF",gx.O.AV11cSaidaDocumentoRefCodUf)},c2v:function(){gx.O.AV11cSaidaDocumentoRefCodUf=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDADOCUMENTOREFCODUF",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKSAIDADOCUMENTOREFDATAEMISSAO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDADOCUMENTOREFDATAEMISSAO",gxz:"ZV12cSaidaDocumentoRefDataEmissao",gxold:"OV12cSaidaDocumentoRefDataEmissao",gxvar:"AV12cSaidaDocumentoRefDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cSaidaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12cSaidaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDADOCUMENTOREFDATAEMISSAO",gx.O.AV12cSaidaDocumentoRefDataEmissao,0)},c2v:function(){gx.O.AV12cSaidaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCSAIDADOCUMENTOREFDATAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAID",row || gx.fn.currentGridRowImpl(51),gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFSEQUENCIA",gxz:"Z10773SaidaDocumentoRefSequencia",gxold:"O10773SaidaDocumentoRefSequencia",gxvar:"A10773SaidaDocumentoRefSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10773SaidaDocumentoRefSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10773SaidaDocumentoRefSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDADOCUMENTOREFSEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A10773SaidaDocumentoRefSequencia,0)},c2v:function(){gx.O.A10773SaidaDocumentoRefSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDADOCUMENTOREFSEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFMODELOCOD",gxz:"Z10774SaidaDocumentoRefModeloCod",gxold:"O10774SaidaDocumentoRefModeloCod",gxvar:"A10774SaidaDocumentoRefModeloCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10774SaidaDocumentoRefModeloCod=Value},v2z:function(Value){gx.O.Z10774SaidaDocumentoRefModeloCod=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDADOCUMENTOREFMODELOCOD",row || gx.fn.currentGridRowImpl(51),gx.O.A10774SaidaDocumentoRefModeloCod,0)},c2v:function(){gx.O.A10774SaidaDocumentoRefModeloCod=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDADOCUMENTOREFMODELOCOD",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFCODUF",gxz:"Z10777SaidaDocumentoRefCodUf",gxold:"O10777SaidaDocumentoRefCodUf",gxvar:"A10777SaidaDocumentoRefCodUf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A10777SaidaDocumentoRefCodUf=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10777SaidaDocumentoRefCodUf=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("SAIDADOCUMENTOREFCODUF",row || gx.fn.currentGridRowImpl(51),gx.O.A10777SaidaDocumentoRefCodUf);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10777SaidaDocumentoRefCodUf=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDADOCUMENTOREFCODUF",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cSaidaEmpresaId = "" ;
   this.ZV6cSaidaEmpresaId = "" ;
   this.OV6cSaidaEmpresaId = "" ;
   this.AV7cSaidaId = 0 ;
   this.ZV7cSaidaId = 0 ;
   this.OV7cSaidaId = 0 ;
   this.AV8cSaidaDocumentoRefSequencia = 0 ;
   this.ZV8cSaidaDocumentoRefSequencia = 0 ;
   this.OV8cSaidaDocumentoRefSequencia = 0 ;
   this.AV9cSaidaDocumentoRefModeloCod = "" ;
   this.ZV9cSaidaDocumentoRefModeloCod = "" ;
   this.OV9cSaidaDocumentoRefModeloCod = "" ;
   this.AV10cSaidaDocumentoRefChave = "" ;
   this.ZV10cSaidaDocumentoRefChave = "" ;
   this.OV10cSaidaDocumentoRefChave = "" ;
   this.AV11cSaidaDocumentoRefCodUf = 0 ;
   this.ZV11cSaidaDocumentoRefCodUf = 0 ;
   this.OV11cSaidaDocumentoRefCodUf = 0 ;
   this.AV12cSaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.ZV12cSaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.OV12cSaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.Z10773SaidaDocumentoRefSequencia = 0 ;
   this.O10773SaidaDocumentoRefSequencia = 0 ;
   this.Z10774SaidaDocumentoRefModeloCod = "" ;
   this.O10774SaidaDocumentoRefModeloCod = "" ;
   this.Z10777SaidaDocumentoRefCodUf = 0 ;
   this.O10777SaidaDocumentoRefCodUf = 0 ;
   this.AV6cSaidaEmpresaId = "" ;
   this.AV7cSaidaId = 0 ;
   this.AV8cSaidaDocumentoRefSequencia = 0 ;
   this.AV9cSaidaDocumentoRefModeloCod = "" ;
   this.AV10cSaidaDocumentoRefChave = "" ;
   this.AV11cSaidaDocumentoRefCodUf = 0 ;
   this.AV12cSaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.AV13pSaidaEmpresaId = "" ;
   this.AV14pSaidaId = 0 ;
   this.AV15pSaidaDocumentoRefSequencia = 0 ;
   this.A10778SaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.A10776SaidaDocumentoRefChave = "" ;
   this.AV5LinkSelection = "" ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A10773SaidaDocumentoRefSequencia = 0 ;
   this.A10774SaidaDocumentoRefModeloCod = "" ;
   this.A10777SaidaDocumentoRefCodUf = 0 ;
   this.Events = {"e132g62_client": ["ENTER", true] ,"e142g61_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaDocumentoRefSequencia',fld:'vCSAIDADOCUMENTOREFSEQUENCIA'},{av:'AV9cSaidaDocumentoRefModeloCod',fld:'vCSAIDADOCUMENTOREFMODELOCOD'},{av:'AV10cSaidaDocumentoRefChave',fld:'vCSAIDADOCUMENTOREFCHAVE'},{av:'AV11cSaidaDocumentoRefCodUf',fld:'vCSAIDADOCUMENTOREFCODUF'},{av:'AV12cSaidaDocumentoRefDataEmissao',fld:'vCSAIDADOCUMENTOREFDATAEMISSAO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'A10773SaidaDocumentoRefSequencia',fld:'SAIDADOCUMENTOREFSEQUENCIA'}],[{av:'AV13pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID'},{av:'AV14pSaidaId',fld:'vPSAIDAID'},{av:'AV15pSaidaDocumentoRefSequencia',fld:'vPSAIDADOCUMENTOREFSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaDocumentoRefSequencia',fld:'vCSAIDADOCUMENTOREFSEQUENCIA'},{av:'AV9cSaidaDocumentoRefModeloCod',fld:'vCSAIDADOCUMENTOREFMODELOCOD'},{av:'AV10cSaidaDocumentoRefChave',fld:'vCSAIDADOCUMENTOREFCHAVE'},{av:'AV11cSaidaDocumentoRefCodUf',fld:'vCSAIDADOCUMENTOREFCODUF'},{av:'AV12cSaidaDocumentoRefDataEmissao',fld:'vCSAIDADOCUMENTOREFDATAEMISSAO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaDocumentoRefSequencia',fld:'vCSAIDADOCUMENTOREFSEQUENCIA'},{av:'AV9cSaidaDocumentoRefModeloCod',fld:'vCSAIDADOCUMENTOREFMODELOCOD'},{av:'AV10cSaidaDocumentoRefChave',fld:'vCSAIDADOCUMENTOREFCHAVE'},{av:'AV11cSaidaDocumentoRefCodUf',fld:'vCSAIDADOCUMENTOREFCODUF'},{av:'AV12cSaidaDocumentoRefDataEmissao',fld:'vCSAIDADOCUMENTOREFDATAEMISSAO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaDocumentoRefSequencia',fld:'vCSAIDADOCUMENTOREFSEQUENCIA'},{av:'AV9cSaidaDocumentoRefModeloCod',fld:'vCSAIDADOCUMENTOREFMODELOCOD'},{av:'AV10cSaidaDocumentoRefChave',fld:'vCSAIDADOCUMENTOREFCHAVE'},{av:'AV11cSaidaDocumentoRefCodUf',fld:'vCSAIDADOCUMENTOREFCODUF'},{av:'AV12cSaidaDocumentoRefDataEmissao',fld:'vCSAIDADOCUMENTOREFDATAEMISSAO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaDocumentoRefSequencia',fld:'vCSAIDADOCUMENTOREFSEQUENCIA'},{av:'AV9cSaidaDocumentoRefModeloCod',fld:'vCSAIDADOCUMENTOREFMODELOCOD'},{av:'AV10cSaidaDocumentoRefChave',fld:'vCSAIDADOCUMENTOREFCHAVE'},{av:'AV11cSaidaDocumentoRefCodUf',fld:'vCSAIDADOCUMENTOREFCODUF'},{av:'AV12cSaidaDocumentoRefDataEmissao',fld:'vCSAIDADOCUMENTOREFDATAEMISSAO'}],[]];
   this.setVCMap("AV13pSaidaEmpresaId", "vPSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV14pSaidaId", "vPSAIDAID", 0, "int");
   this.setVCMap("AV15pSaidaDocumentoRefSequencia", "vPSAIDADOCUMENTOREFSEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0m20());
