/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:46:41.86
*/
gx.evt.autoSkip = false;
gx.define('gx0m22', false, function () {
   this.ServerClass =  "gx0m22" ;
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
      this.AV11pSaidaEmpresaId=gx.fn.getControlValue("vPSAIDAEMPRESAID") ;
      this.AV12pSaidaId=gx.fn.getIntegerValue("vPSAIDAID",'.') ;
      this.AV13pSaidaDocumentoRefSequencia=gx.fn.getIntegerValue("vPSAIDADOCUMENTOREFSEQUENCIA",'.') ;
   };
   this.Validv_Csaidadocumentorefcoduf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCSAIDADOCUMENTOREFCODUF");
         this.AnyError  = 0;
         if ( ! ( this.AV9cSaidaDocumentoRefCodUf == 0 || this.AV9cSaidaDocumentoRefCodUf == 12 || this.AV9cSaidaDocumentoRefCodUf == 27 || this.AV9cSaidaDocumentoRefCodUf == 16 || this.AV9cSaidaDocumentoRefCodUf == 13 || this.AV9cSaidaDocumentoRefCodUf == 29 || this.AV9cSaidaDocumentoRefCodUf == 23 || this.AV9cSaidaDocumentoRefCodUf == 53 || this.AV9cSaidaDocumentoRefCodUf == 32 || this.AV9cSaidaDocumentoRefCodUf == 52 || this.AV9cSaidaDocumentoRefCodUf == 21 || this.AV9cSaidaDocumentoRefCodUf == 51 || this.AV9cSaidaDocumentoRefCodUf == 50 || this.AV9cSaidaDocumentoRefCodUf == 31 || this.AV9cSaidaDocumentoRefCodUf == 15 || this.AV9cSaidaDocumentoRefCodUf == 41 || this.AV9cSaidaDocumentoRefCodUf == 25 || this.AV9cSaidaDocumentoRefCodUf == 26 || this.AV9cSaidaDocumentoRefCodUf == 22 || this.AV9cSaidaDocumentoRefCodUf == 33 || this.AV9cSaidaDocumentoRefCodUf == 24 || this.AV9cSaidaDocumentoRefCodUf == 43 || this.AV9cSaidaDocumentoRefCodUf == 11 || this.AV9cSaidaDocumentoRefCodUf == 14 || this.AV9cSaidaDocumentoRefCodUf == 42 || this.AV9cSaidaDocumentoRefCodUf == 35 || this.AV9cSaidaDocumentoRefCodUf == 28 || this.AV9cSaidaDocumentoRefCodUf == 17 || (0==this.AV9cSaidaDocumentoRefCodUf) ) )
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
   this.e132942_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142941_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,50];
   this.GXLastCtrlId =50;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0m22",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10773,43,"SAIDADOCUMENTOREFSEQUENCIA","Ref Sequencia","","SaidaDocumentoRefSequencia","int",0,"px",2,2,"right",null,[],10773,"SaidaDocumentoRefSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10774,44,"SAIDADOCUMENTOREFMODELOCOD","Modelo Cod","","SaidaDocumentoRefModeloCod","char",0,"px",2,2,"left",null,[],10774,"SaidaDocumentoRefModeloCod",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10776,45,"SAIDADOCUMENTOREFCHAVE","Ref Chave","","SaidaDocumentoRefChave","char",0,"px",44,44,"left",null,[],10776,"SaidaDocumentoRefChave",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4306,46,"SAIDAEMPRESAID","Empresa Saída","","SaidaEmpresaId","char",0,"px",10,10,"left",null,[],4306,"SaidaEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4307,47,"SAIDAID","Número da Saída","","SaidaId","int",0,"px",10,10,"right",null,[],4307,"SaidaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSAIDADOCUMENTOREFSEQUENCIA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDADOCUMENTOREFSEQUENCIA",gxz:"ZV6cSaidaDocumentoRefSequencia",gxold:"OV6cSaidaDocumentoRefSequencia",gxvar:"AV6cSaidaDocumentoRefSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSaidaDocumentoRefSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cSaidaDocumentoRefSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDADOCUMENTOREFSEQUENCIA",gx.O.AV6cSaidaDocumentoRefSequencia,0)},c2v:function(){gx.O.AV6cSaidaDocumentoRefSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDADOCUMENTOREFSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSAIDADOCUMENTOREFMODELOCOD", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDADOCUMENTOREFMODELOCOD",gxz:"ZV7cSaidaDocumentoRefModeloCod",gxold:"OV7cSaidaDocumentoRefModeloCod",gxvar:"AV7cSaidaDocumentoRefModeloCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSaidaDocumentoRefModeloCod=Value},v2z:function(Value){gx.O.ZV7cSaidaDocumentoRefModeloCod=Value},v2c:function(){gx.fn.setControlValue("vCSAIDADOCUMENTOREFMODELOCOD",gx.O.AV7cSaidaDocumentoRefModeloCod,0)},c2v:function(){gx.O.AV7cSaidaDocumentoRefModeloCod=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDADOCUMENTOREFMODELOCOD")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSAIDADOCUMENTOREFCHAVE", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDADOCUMENTOREFCHAVE",gxz:"ZV8cSaidaDocumentoRefChave",gxold:"OV8cSaidaDocumentoRefChave",gxvar:"AV8cSaidaDocumentoRefChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSaidaDocumentoRefChave=Value},v2z:function(Value){gx.O.ZV8cSaidaDocumentoRefChave=Value},v2c:function(){gx.fn.setControlValue("vCSAIDADOCUMENTOREFCHAVE",gx.O.AV8cSaidaDocumentoRefChave,0)},c2v:function(){gx.O.AV8cSaidaDocumentoRefChave=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDADOCUMENTOREFCHAVE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSAIDADOCUMENTOREFCODUF", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Csaidadocumentorefcoduf,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDADOCUMENTOREFCODUF",gxz:"ZV9cSaidaDocumentoRefCodUf",gxold:"OV9cSaidaDocumentoRefCodUf",gxvar:"AV9cSaidaDocumentoRefCodUf",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cSaidaDocumentoRefCodUf=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cSaidaDocumentoRefCodUf=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCSAIDADOCUMENTOREFCODUF",gx.O.AV9cSaidaDocumentoRefCodUf)},c2v:function(){gx.O.AV9cSaidaDocumentoRefCodUf=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDADOCUMENTOREFCODUF",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKSAIDADOCUMENTOREFDATAEMISSAO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDADOCUMENTOREFDATAEMISSAO",gxz:"ZV10cSaidaDocumentoRefDataEmissao",gxold:"OV10cSaidaDocumentoRefDataEmissao",gxvar:"AV10cSaidaDocumentoRefDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cSaidaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cSaidaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDADOCUMENTOREFDATAEMISSAO",gx.O.AV10cSaidaDocumentoRefDataEmissao,0)},c2v:function(){gx.O.AV10cSaidaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCSAIDADOCUMENTOREFDATAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFSEQUENCIA",gxz:"Z10773SaidaDocumentoRefSequencia",gxold:"O10773SaidaDocumentoRefSequencia",gxvar:"A10773SaidaDocumentoRefSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10773SaidaDocumentoRefSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10773SaidaDocumentoRefSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDADOCUMENTOREFSEQUENCIA",row || gx.fn.currentGridRowImpl(41),gx.O.A10773SaidaDocumentoRefSequencia,0)},c2v:function(){gx.O.A10773SaidaDocumentoRefSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDADOCUMENTOREFSEQUENCIA",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFMODELOCOD",gxz:"Z10774SaidaDocumentoRefModeloCod",gxold:"O10774SaidaDocumentoRefModeloCod",gxvar:"A10774SaidaDocumentoRefModeloCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10774SaidaDocumentoRefModeloCod=Value},v2z:function(Value){gx.O.Z10774SaidaDocumentoRefModeloCod=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDADOCUMENTOREFMODELOCOD",row || gx.fn.currentGridRowImpl(41),gx.O.A10774SaidaDocumentoRefModeloCod,0)},c2v:function(){gx.O.A10774SaidaDocumentoRefModeloCod=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDADOCUMENTOREFMODELOCOD",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:44,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADOCUMENTOREFCHAVE",gxz:"Z10776SaidaDocumentoRefChave",gxold:"O10776SaidaDocumentoRefChave",gxvar:"A10776SaidaDocumentoRefChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10776SaidaDocumentoRefChave=Value},v2z:function(Value){gx.O.Z10776SaidaDocumentoRefChave=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDADOCUMENTOREFCHAVE",row || gx.fn.currentGridRowImpl(41),gx.O.A10776SaidaDocumentoRefChave,0)},c2v:function(){gx.O.A10776SaidaDocumentoRefChave=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDADOCUMENTOREFCHAVE",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAID",row || gx.fn.currentGridRowImpl(41),gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   this.AV6cSaidaDocumentoRefSequencia = 0 ;
   this.ZV6cSaidaDocumentoRefSequencia = 0 ;
   this.OV6cSaidaDocumentoRefSequencia = 0 ;
   this.AV7cSaidaDocumentoRefModeloCod = "" ;
   this.ZV7cSaidaDocumentoRefModeloCod = "" ;
   this.OV7cSaidaDocumentoRefModeloCod = "" ;
   this.AV8cSaidaDocumentoRefChave = "" ;
   this.ZV8cSaidaDocumentoRefChave = "" ;
   this.OV8cSaidaDocumentoRefChave = "" ;
   this.AV9cSaidaDocumentoRefCodUf = 0 ;
   this.ZV9cSaidaDocumentoRefCodUf = 0 ;
   this.OV9cSaidaDocumentoRefCodUf = 0 ;
   this.AV10cSaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.ZV10cSaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.OV10cSaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10773SaidaDocumentoRefSequencia = 0 ;
   this.O10773SaidaDocumentoRefSequencia = 0 ;
   this.Z10774SaidaDocumentoRefModeloCod = "" ;
   this.O10774SaidaDocumentoRefModeloCod = "" ;
   this.Z10776SaidaDocumentoRefChave = "" ;
   this.O10776SaidaDocumentoRefChave = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.AV6cSaidaDocumentoRefSequencia = 0 ;
   this.AV7cSaidaDocumentoRefModeloCod = "" ;
   this.AV8cSaidaDocumentoRefChave = "" ;
   this.AV9cSaidaDocumentoRefCodUf = 0 ;
   this.AV10cSaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.AV11pSaidaEmpresaId = "" ;
   this.AV12pSaidaId = 0 ;
   this.AV13pSaidaDocumentoRefSequencia = 0 ;
   this.A10778SaidaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.A10777SaidaDocumentoRefCodUf = 0 ;
   this.AV5LinkSelection = "" ;
   this.A10773SaidaDocumentoRefSequencia = 0 ;
   this.A10774SaidaDocumentoRefModeloCod = "" ;
   this.A10776SaidaDocumentoRefChave = "" ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.Events = {"e132942_client": ["ENTER", true] ,"e142941_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaDocumentoRefSequencia',fld:'vCSAIDADOCUMENTOREFSEQUENCIA'},{av:'AV7cSaidaDocumentoRefModeloCod',fld:'vCSAIDADOCUMENTOREFMODELOCOD'},{av:'AV8cSaidaDocumentoRefChave',fld:'vCSAIDADOCUMENTOREFCHAVE'},{av:'AV9cSaidaDocumentoRefCodUf',fld:'vCSAIDADOCUMENTOREFCODUF'},{av:'AV10cSaidaDocumentoRefDataEmissao',fld:'vCSAIDADOCUMENTOREFDATAEMISSAO'},{av:'AV11pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true},{av:'AV12pSaidaId',fld:'vPSAIDAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10773SaidaDocumentoRefSequencia',fld:'SAIDADOCUMENTOREFSEQUENCIA'}],[{av:'AV13pSaidaDocumentoRefSequencia',fld:'vPSAIDADOCUMENTOREFSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaDocumentoRefSequencia',fld:'vCSAIDADOCUMENTOREFSEQUENCIA'},{av:'AV7cSaidaDocumentoRefModeloCod',fld:'vCSAIDADOCUMENTOREFMODELOCOD'},{av:'AV8cSaidaDocumentoRefChave',fld:'vCSAIDADOCUMENTOREFCHAVE'},{av:'AV9cSaidaDocumentoRefCodUf',fld:'vCSAIDADOCUMENTOREFCODUF'},{av:'AV10cSaidaDocumentoRefDataEmissao',fld:'vCSAIDADOCUMENTOREFDATAEMISSAO'},{av:'AV11pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true},{av:'AV12pSaidaId',fld:'vPSAIDAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaDocumentoRefSequencia',fld:'vCSAIDADOCUMENTOREFSEQUENCIA'},{av:'AV7cSaidaDocumentoRefModeloCod',fld:'vCSAIDADOCUMENTOREFMODELOCOD'},{av:'AV8cSaidaDocumentoRefChave',fld:'vCSAIDADOCUMENTOREFCHAVE'},{av:'AV9cSaidaDocumentoRefCodUf',fld:'vCSAIDADOCUMENTOREFCODUF'},{av:'AV10cSaidaDocumentoRefDataEmissao',fld:'vCSAIDADOCUMENTOREFDATAEMISSAO'},{av:'AV11pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true},{av:'AV12pSaidaId',fld:'vPSAIDAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaDocumentoRefSequencia',fld:'vCSAIDADOCUMENTOREFSEQUENCIA'},{av:'AV7cSaidaDocumentoRefModeloCod',fld:'vCSAIDADOCUMENTOREFMODELOCOD'},{av:'AV8cSaidaDocumentoRefChave',fld:'vCSAIDADOCUMENTOREFCHAVE'},{av:'AV9cSaidaDocumentoRefCodUf',fld:'vCSAIDADOCUMENTOREFCODUF'},{av:'AV10cSaidaDocumentoRefDataEmissao',fld:'vCSAIDADOCUMENTOREFDATAEMISSAO'},{av:'AV11pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true},{av:'AV12pSaidaId',fld:'vPSAIDAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaDocumentoRefSequencia',fld:'vCSAIDADOCUMENTOREFSEQUENCIA'},{av:'AV7cSaidaDocumentoRefModeloCod',fld:'vCSAIDADOCUMENTOREFMODELOCOD'},{av:'AV8cSaidaDocumentoRefChave',fld:'vCSAIDADOCUMENTOREFCHAVE'},{av:'AV9cSaidaDocumentoRefCodUf',fld:'vCSAIDADOCUMENTOREFCODUF'},{av:'AV10cSaidaDocumentoRefDataEmissao',fld:'vCSAIDADOCUMENTOREFDATAEMISSAO'},{av:'AV11pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true},{av:'AV12pSaidaId',fld:'vPSAIDAID',hsh:true}],[]];
   this.setVCMap("AV11pSaidaEmpresaId", "vPSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV12pSaidaId", "vPSAIDAID", 0, "int");
   this.setVCMap("AV13pSaidaDocumentoRefSequencia", "vPSAIDADOCUMENTOREFSEQUENCIA", 0, "int");
   this.setVCMap("AV11pSaidaEmpresaId", "vPSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV12pSaidaId", "vPSAIDAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pSaidaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pSaidaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0m22());
