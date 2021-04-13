/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:46:43.83
*/
gx.evt.autoSkip = false;
gx.define('gx0m32', false, function () {
   this.ServerClass =  "gx0m32" ;
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
      this.AV11pEntradaEmpresaId=gx.fn.getControlValue("vPENTRADAEMPRESAID") ;
      this.AV12pEntradaId=gx.fn.getIntegerValue("vPENTRADAID",'.') ;
      this.AV13pEntradaDocumentoRefSequencia=gx.fn.getIntegerValue("vPENTRADADOCUMENTOREFSEQUENCIA",'.') ;
   };
   this.Validv_Centradadocumentorefcoduf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCENTRADADOCUMENTOREFCODUF");
         this.AnyError  = 0;
         if ( ! ( this.AV9cEntradaDocumentoRefCodUf == 0 || this.AV9cEntradaDocumentoRefCodUf == 12 || this.AV9cEntradaDocumentoRefCodUf == 27 || this.AV9cEntradaDocumentoRefCodUf == 16 || this.AV9cEntradaDocumentoRefCodUf == 13 || this.AV9cEntradaDocumentoRefCodUf == 29 || this.AV9cEntradaDocumentoRefCodUf == 23 || this.AV9cEntradaDocumentoRefCodUf == 53 || this.AV9cEntradaDocumentoRefCodUf == 32 || this.AV9cEntradaDocumentoRefCodUf == 52 || this.AV9cEntradaDocumentoRefCodUf == 21 || this.AV9cEntradaDocumentoRefCodUf == 51 || this.AV9cEntradaDocumentoRefCodUf == 50 || this.AV9cEntradaDocumentoRefCodUf == 31 || this.AV9cEntradaDocumentoRefCodUf == 15 || this.AV9cEntradaDocumentoRefCodUf == 41 || this.AV9cEntradaDocumentoRefCodUf == 25 || this.AV9cEntradaDocumentoRefCodUf == 26 || this.AV9cEntradaDocumentoRefCodUf == 22 || this.AV9cEntradaDocumentoRefCodUf == 33 || this.AV9cEntradaDocumentoRefCodUf == 24 || this.AV9cEntradaDocumentoRefCodUf == 43 || this.AV9cEntradaDocumentoRefCodUf == 11 || this.AV9cEntradaDocumentoRefCodUf == 14 || this.AV9cEntradaDocumentoRefCodUf == 42 || this.AV9cEntradaDocumentoRefCodUf == 35 || this.AV9cEntradaDocumentoRefCodUf == 28 || this.AV9cEntradaDocumentoRefCodUf == 17 || (0==this.AV9cEntradaDocumentoRefCodUf) ) )
         {
            try {
               gxballoon.setError("Campo cEntradaDocumentoRefCodUf fora do intervalo");
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
   this.e132952_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142951_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,48,49,52];
   this.GXLastCtrlId =52;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0m32",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10805,43,"ENTRADADOCUMENTOREFSEQUENCIA","Sequencial","","EntradaDocumentoRefSequencia","int",0,"px",2,2,"right",null,[],10805,"EntradaDocumentoRefSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10803,44,"ENTRADADOCUMENTOREFMODELOID","Documento Fiscal","","EntradaDocumentoRefModeloId","char",0,"px",2,2,"left",null,[],10803,"EntradaDocumentoRefModeloId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10794,45,"ENTRADADOCUMENTOREFCHAVE","","","EntradaDocumentoRefChave","char",0,"px",44,44,"left",null,[],10794,"EntradaDocumentoRefChave",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(10796,46,"ENTRADADOCUMENTOREFCODUF","do emitente","EntradaDocumentoRefCodUf","int",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(10795,47,"ENTRADADOCUMENTOREFCNPJEMITENT","do emitente","","EntradaDocumentoRefCNPJEmitent","char",0,"px",18,18,"left",null,[],10795,"EntradaDocumentoRefCNPJEmitent",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4637,48,"ENTRADAEMPRESAID","Empresa da Entrada","","EntradaEmpresaId","char",0,"px",10,10,"left",null,[],4637,"EntradaEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4638,49,"ENTRADAID","Código da Entrada","","EntradaId","int",0,"px",10,10,"right",null,[],4638,"EntradaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKENTRADADOCUMENTOREFSEQUENCIA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADADOCUMENTOREFSEQUENCIA",gxz:"ZV6cEntradaDocumentoRefSequencia",gxold:"OV6cEntradaDocumentoRefSequencia",gxvar:"AV6cEntradaDocumentoRefSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEntradaDocumentoRefSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cEntradaDocumentoRefSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADADOCUMENTOREFSEQUENCIA",gx.O.AV6cEntradaDocumentoRefSequencia,0)},c2v:function(){gx.O.AV6cEntradaDocumentoRefSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADADOCUMENTOREFSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKENTRADADOCUMENTOREFMODELOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADADOCUMENTOREFMODELOID",gxz:"ZV7cEntradaDocumentoRefModeloId",gxold:"OV7cEntradaDocumentoRefModeloId",gxvar:"AV7cEntradaDocumentoRefModeloId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cEntradaDocumentoRefModeloId=Value},v2z:function(Value){gx.O.ZV7cEntradaDocumentoRefModeloId=Value},v2c:function(){gx.fn.setControlValue("vCENTRADADOCUMENTOREFMODELOID",gx.O.AV7cEntradaDocumentoRefModeloId,0)},c2v:function(){gx.O.AV7cEntradaDocumentoRefModeloId=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADADOCUMENTOREFMODELOID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKENTRADADOCUMENTOREFCHAVE", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:44,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADADOCUMENTOREFCHAVE",gxz:"ZV8cEntradaDocumentoRefChave",gxold:"OV8cEntradaDocumentoRefChave",gxvar:"AV8cEntradaDocumentoRefChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cEntradaDocumentoRefChave=Value},v2z:function(Value){gx.O.ZV8cEntradaDocumentoRefChave=Value},v2c:function(){gx.fn.setControlValue("vCENTRADADOCUMENTOREFCHAVE",gx.O.AV8cEntradaDocumentoRefChave,0)},c2v:function(){gx.O.AV8cEntradaDocumentoRefChave=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADADOCUMENTOREFCHAVE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKENTRADADOCUMENTOREFCODUF", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Centradadocumentorefcoduf,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADADOCUMENTOREFCODUF",gxz:"ZV9cEntradaDocumentoRefCodUf",gxold:"OV9cEntradaDocumentoRefCodUf",gxvar:"AV9cEntradaDocumentoRefCodUf",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cEntradaDocumentoRefCodUf=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cEntradaDocumentoRefCodUf=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCENTRADADOCUMENTOREFCODUF",gx.O.AV9cEntradaDocumentoRefCodUf)},c2v:function(){gx.O.AV9cEntradaDocumentoRefCodUf=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADADOCUMENTOREFCODUF",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKENTRADADOCUMENTOREFDATAEMISSAO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADADOCUMENTOREFDATAEMISSAO",gxz:"ZV10cEntradaDocumentoRefDataEmissao",gxold:"OV10cEntradaDocumentoRefDataEmissao",gxvar:"AV10cEntradaDocumentoRefDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cEntradaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cEntradaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADADOCUMENTOREFDATAEMISSAO",gx.O.AV10cEntradaDocumentoRefDataEmissao,0)},c2v:function(){gx.O.AV10cEntradaDocumentoRefDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCENTRADADOCUMENTOREFDATAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADADOCUMENTOREFSEQUENCIA",gxz:"Z10805EntradaDocumentoRefSequencia",gxold:"O10805EntradaDocumentoRefSequencia",gxvar:"A10805EntradaDocumentoRefSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10805EntradaDocumentoRefSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10805EntradaDocumentoRefSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADADOCUMENTOREFSEQUENCIA",row || gx.fn.currentGridRowImpl(41),gx.O.A10805EntradaDocumentoRefSequencia,0)},c2v:function(){gx.O.A10805EntradaDocumentoRefSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADADOCUMENTOREFSEQUENCIA",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADADOCUMENTOREFMODELOID",gxz:"Z10803EntradaDocumentoRefModeloId",gxold:"O10803EntradaDocumentoRefModeloId",gxvar:"A10803EntradaDocumentoRefModeloId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10803EntradaDocumentoRefModeloId=Value},v2z:function(Value){gx.O.Z10803EntradaDocumentoRefModeloId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADADOCUMENTOREFMODELOID",row || gx.fn.currentGridRowImpl(41),gx.O.A10803EntradaDocumentoRefModeloId,0)},c2v:function(){gx.O.A10803EntradaDocumentoRefModeloId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADADOCUMENTOREFMODELOID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:44,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADADOCUMENTOREFCHAVE",gxz:"Z10794EntradaDocumentoRefChave",gxold:"O10794EntradaDocumentoRefChave",gxvar:"A10794EntradaDocumentoRefChave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10794EntradaDocumentoRefChave=Value},v2z:function(Value){gx.O.Z10794EntradaDocumentoRefChave=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADADOCUMENTOREFCHAVE",row || gx.fn.currentGridRowImpl(41),gx.O.A10794EntradaDocumentoRefChave,0)},c2v:function(){gx.O.A10794EntradaDocumentoRefChave=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADADOCUMENTOREFCHAVE",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADADOCUMENTOREFCODUF",gxz:"Z10796EntradaDocumentoRefCodUf",gxold:"O10796EntradaDocumentoRefCodUf",gxvar:"A10796EntradaDocumentoRefCodUf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A10796EntradaDocumentoRefCodUf=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10796EntradaDocumentoRefCodUf=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridComboBoxValue("ENTRADADOCUMENTOREFCODUF",row || gx.fn.currentGridRowImpl(41),gx.O.A10796EntradaDocumentoRefCodUf);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10796EntradaDocumentoRefCodUf=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADADOCUMENTOREFCODUF",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADADOCUMENTOREFCNPJEMITENT",gxz:"Z10795EntradaDocumentoRefCNPJEmitent",gxold:"O10795EntradaDocumentoRefCNPJEmitent",gxvar:"A10795EntradaDocumentoRefCNPJEmitent",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10795EntradaDocumentoRefCNPJEmitent=Value},v2z:function(Value){gx.O.Z10795EntradaDocumentoRefCNPJEmitent=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADADOCUMENTOREFCNPJEMITENT",row || gx.fn.currentGridRowImpl(41),gx.O.A10795EntradaDocumentoRefCNPJEmitent,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10795EntradaDocumentoRefCNPJEmitent=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADADOCUMENTOREFCNPJEMITENT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAEMPRESAID",gxz:"Z4637EntradaEmpresaId",gxold:"O4637EntradaEmpresaId",gxvar:"A4637EntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4637EntradaEmpresaId=Value},v2z:function(Value){gx.O.Z4637EntradaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A4637EntradaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4637EntradaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAID",gxz:"Z4638EntradaId",gxold:"O4638EntradaId",gxvar:"A4638EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4638EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4638EntradaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAID",row || gx.fn.currentGridRowImpl(41),gx.O.A4638EntradaId,0)},c2v:function(){gx.O.A4638EntradaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TABLE4",grid:0};
   this.AV6cEntradaDocumentoRefSequencia = 0 ;
   this.ZV6cEntradaDocumentoRefSequencia = 0 ;
   this.OV6cEntradaDocumentoRefSequencia = 0 ;
   this.AV7cEntradaDocumentoRefModeloId = "" ;
   this.ZV7cEntradaDocumentoRefModeloId = "" ;
   this.OV7cEntradaDocumentoRefModeloId = "" ;
   this.AV8cEntradaDocumentoRefChave = "" ;
   this.ZV8cEntradaDocumentoRefChave = "" ;
   this.OV8cEntradaDocumentoRefChave = "" ;
   this.AV9cEntradaDocumentoRefCodUf = 0 ;
   this.ZV9cEntradaDocumentoRefCodUf = 0 ;
   this.OV9cEntradaDocumentoRefCodUf = 0 ;
   this.AV10cEntradaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.ZV10cEntradaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.OV10cEntradaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10805EntradaDocumentoRefSequencia = 0 ;
   this.O10805EntradaDocumentoRefSequencia = 0 ;
   this.Z10803EntradaDocumentoRefModeloId = "" ;
   this.O10803EntradaDocumentoRefModeloId = "" ;
   this.Z10794EntradaDocumentoRefChave = "" ;
   this.O10794EntradaDocumentoRefChave = "" ;
   this.Z10796EntradaDocumentoRefCodUf = 0 ;
   this.O10796EntradaDocumentoRefCodUf = 0 ;
   this.Z10795EntradaDocumentoRefCNPJEmitent = "" ;
   this.O10795EntradaDocumentoRefCNPJEmitent = "" ;
   this.Z4637EntradaEmpresaId = "" ;
   this.O4637EntradaEmpresaId = "" ;
   this.Z4638EntradaId = 0 ;
   this.O4638EntradaId = 0 ;
   this.AV6cEntradaDocumentoRefSequencia = 0 ;
   this.AV7cEntradaDocumentoRefModeloId = "" ;
   this.AV8cEntradaDocumentoRefChave = "" ;
   this.AV9cEntradaDocumentoRefCodUf = 0 ;
   this.AV10cEntradaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.AV11pEntradaEmpresaId = "" ;
   this.AV12pEntradaId = 0 ;
   this.AV13pEntradaDocumentoRefSequencia = 0 ;
   this.A10799EntradaDocumentoRefDataEmissao = gx.date.nullDate() ;
   this.AV5LinkSelection = "" ;
   this.A10805EntradaDocumentoRefSequencia = 0 ;
   this.A10803EntradaDocumentoRefModeloId = "" ;
   this.A10794EntradaDocumentoRefChave = "" ;
   this.A10796EntradaDocumentoRefCodUf = 0 ;
   this.A10795EntradaDocumentoRefCNPJEmitent = "" ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4638EntradaId = 0 ;
   this.Events = {"e132952_client": ["ENTER", true] ,"e142951_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaDocumentoRefSequencia',fld:'vCENTRADADOCUMENTOREFSEQUENCIA'},{av:'AV7cEntradaDocumentoRefModeloId',fld:'vCENTRADADOCUMENTOREFMODELOID'},{av:'AV8cEntradaDocumentoRefChave',fld:'vCENTRADADOCUMENTOREFCHAVE'},{av:'AV9cEntradaDocumentoRefCodUf',fld:'vCENTRADADOCUMENTOREFCODUF'},{av:'AV10cEntradaDocumentoRefDataEmissao',fld:'vCENTRADADOCUMENTOREFDATAEMISSAO'},{av:'AV11pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV12pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10805EntradaDocumentoRefSequencia',fld:'ENTRADADOCUMENTOREFSEQUENCIA'}],[{av:'AV13pEntradaDocumentoRefSequencia',fld:'vPENTRADADOCUMENTOREFSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaDocumentoRefSequencia',fld:'vCENTRADADOCUMENTOREFSEQUENCIA'},{av:'AV7cEntradaDocumentoRefModeloId',fld:'vCENTRADADOCUMENTOREFMODELOID'},{av:'AV8cEntradaDocumentoRefChave',fld:'vCENTRADADOCUMENTOREFCHAVE'},{av:'AV9cEntradaDocumentoRefCodUf',fld:'vCENTRADADOCUMENTOREFCODUF'},{av:'AV10cEntradaDocumentoRefDataEmissao',fld:'vCENTRADADOCUMENTOREFDATAEMISSAO'},{av:'AV11pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV12pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaDocumentoRefSequencia',fld:'vCENTRADADOCUMENTOREFSEQUENCIA'},{av:'AV7cEntradaDocumentoRefModeloId',fld:'vCENTRADADOCUMENTOREFMODELOID'},{av:'AV8cEntradaDocumentoRefChave',fld:'vCENTRADADOCUMENTOREFCHAVE'},{av:'AV9cEntradaDocumentoRefCodUf',fld:'vCENTRADADOCUMENTOREFCODUF'},{av:'AV10cEntradaDocumentoRefDataEmissao',fld:'vCENTRADADOCUMENTOREFDATAEMISSAO'},{av:'AV11pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV12pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaDocumentoRefSequencia',fld:'vCENTRADADOCUMENTOREFSEQUENCIA'},{av:'AV7cEntradaDocumentoRefModeloId',fld:'vCENTRADADOCUMENTOREFMODELOID'},{av:'AV8cEntradaDocumentoRefChave',fld:'vCENTRADADOCUMENTOREFCHAVE'},{av:'AV9cEntradaDocumentoRefCodUf',fld:'vCENTRADADOCUMENTOREFCODUF'},{av:'AV10cEntradaDocumentoRefDataEmissao',fld:'vCENTRADADOCUMENTOREFDATAEMISSAO'},{av:'AV11pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV12pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaDocumentoRefSequencia',fld:'vCENTRADADOCUMENTOREFSEQUENCIA'},{av:'AV7cEntradaDocumentoRefModeloId',fld:'vCENTRADADOCUMENTOREFMODELOID'},{av:'AV8cEntradaDocumentoRefChave',fld:'vCENTRADADOCUMENTOREFCHAVE'},{av:'AV9cEntradaDocumentoRefCodUf',fld:'vCENTRADADOCUMENTOREFCODUF'},{av:'AV10cEntradaDocumentoRefDataEmissao',fld:'vCENTRADADOCUMENTOREFDATAEMISSAO'},{av:'AV11pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV12pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.setVCMap("AV11pEntradaEmpresaId", "vPENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV12pEntradaId", "vPENTRADAID", 0, "int");
   this.setVCMap("AV13pEntradaDocumentoRefSequencia", "vPENTRADADOCUMENTOREFSEQUENCIA", 0, "int");
   this.setVCMap("AV11pEntradaEmpresaId", "vPENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV12pEntradaId", "vPENTRADAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pEntradaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pEntradaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0m32());
