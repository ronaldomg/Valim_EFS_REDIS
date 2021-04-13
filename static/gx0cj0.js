/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:36:56.42
*/
gx.evt.autoSkip = false;
gx.define('gx0cj0', false, function () {
   this.ServerClass =  "gx0cj0" ;
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
      this.AV13pEntradaProvEmpresaId=gx.fn.getControlValue("vPENTRADAPROVEMPRESAID") ;
      this.AV14pEntradaProvId=gx.fn.getIntegerValue("vPENTRADAPROVID",'.') ;
   };
   this.Validv_Centradaprovtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCENTRADAPROVTIPO");
         this.AnyError  = 0;
         if ( ! ( this.AV8cEntradaProvTipo == "1" || this.AV8cEntradaProvTipo == "2" || this.AV8cEntradaProvTipo == "3" || this.AV8cEntradaProvTipo == "4" || this.AV8cEntradaProvTipo == "5" || this.AV8cEntradaProvTipo == "6" || this.AV8cEntradaProvTipo == "7" || (""==this.AV8cEntradaProvTipo) ) )
         {
            try {
               gxballoon.setError("Campo cEntradaProvTipo fora do intervalo");
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
   this.e131rf2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141rf1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0cj0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(5013,53,"ENTRADAPROVEMPRESAID","Empresa da Entrada Provisória","","EntradaProvEmpresaId","char",0,"px",10,10,"left",null,[],5013,"EntradaProvEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5014,54,"ENTRADAPROVID","Entrada Provisória","","EntradaProvId","int",0,"px",10,10,"right",null,[],5014,"EntradaProvId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(5015,55,"ENTRADAPROVTIPO","Tipo de Entrada Provisória","EntradaProvTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(5016,56,"ENTRADAPROVNUMERODOCUMENTO","Número de Documento","","EntradaProvNumeroDocumento","int",0,"px",9,9,"right",null,[],5016,"EntradaProvNumeroDocumento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5017,57,"ENTRADAPROVFORNECEDOREMPID","Empresa do Fornecedor","","EntradaProvFornecedorEmpId","char",0,"px",10,10,"left",null,[],5017,"EntradaProvFornecedorEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5018,58,"ENTRADAPROVFORNECEDORID","Fornecedor","","EntradaProvFornecedorId","int",0,"px",7,7,"right",null,[],5018,"EntradaProvFornecedorId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKENTRADAPROVEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAPROVEMPRESAID",gxz:"ZV6cEntradaProvEmpresaId",gxold:"OV6cEntradaProvEmpresaId",gxvar:"AV6cEntradaProvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEntradaProvEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEntradaProvEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCENTRADAPROVEMPRESAID",gx.O.AV6cEntradaProvEmpresaId,0)},c2v:function(){gx.O.AV6cEntradaProvEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADAPROVEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKENTRADAPROVID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAPROVID",gxz:"ZV7cEntradaProvId",gxold:"OV7cEntradaProvId",gxvar:"AV7cEntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cEntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cEntradaProvId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAPROVID",gx.O.AV7cEntradaProvId,0)},c2v:function(){gx.O.AV7cEntradaProvId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADAPROVID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKENTRADAPROVTIPO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Centradaprovtipo,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAPROVTIPO",gxz:"ZV8cEntradaProvTipo",gxold:"OV8cEntradaProvTipo",gxvar:"AV8cEntradaProvTipo",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cEntradaProvTipo=Value},v2z:function(Value){gx.O.ZV8cEntradaProvTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCENTRADAPROVTIPO",gx.O.AV8cEntradaProvTipo)},c2v:function(){gx.O.AV8cEntradaProvTipo=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADAPROVTIPO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKENTRADAPROVNUMERODOCUMENTO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAPROVNUMERODOCUMENTO",gxz:"ZV9cEntradaProvNumeroDocumento",gxold:"OV9cEntradaProvNumeroDocumento",gxvar:"AV9cEntradaProvNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cEntradaProvNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cEntradaProvNumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAPROVNUMERODOCUMENTO",gx.O.AV9cEntradaProvNumeroDocumento,0)},c2v:function(){gx.O.AV9cEntradaProvNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADAPROVNUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKENTRADAPROVFORNECEDOREMPID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAPROVFORNECEDOREMPID",gxz:"ZV10cEntradaProvFornecedorEmpId",gxold:"OV10cEntradaProvFornecedorEmpId",gxvar:"AV10cEntradaProvFornecedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cEntradaProvFornecedorEmpId=Value},v2z:function(Value){gx.O.ZV10cEntradaProvFornecedorEmpId=Value},v2c:function(){gx.fn.setControlValue("vCENTRADAPROVFORNECEDOREMPID",gx.O.AV10cEntradaProvFornecedorEmpId,0)},c2v:function(){gx.O.AV10cEntradaProvFornecedorEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADAPROVFORNECEDOREMPID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKENTRADAPROVFORNECEDORID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAPROVFORNECEDORID",gxz:"ZV11cEntradaProvFornecedorId",gxold:"OV11cEntradaProvFornecedorId",gxvar:"AV11cEntradaProvFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cEntradaProvFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cEntradaProvFornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAPROVFORNECEDORID",gx.O.AV11cEntradaProvFornecedorId,0)},c2v:function(){gx.O.AV11cEntradaProvFornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADAPROVFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKENTRADAPROVSERIE", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAPROVSERIE",gxz:"ZV12cEntradaProvSerie",gxold:"OV12cEntradaProvSerie",gxvar:"AV12cEntradaProvSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cEntradaProvSerie=Value},v2z:function(Value){gx.O.ZV12cEntradaProvSerie=Value},v2c:function(){gx.fn.setControlValue("vCENTRADAPROVSERIE",gx.O.AV12cEntradaProvSerie,0)},c2v:function(){gx.O.AV12cEntradaProvSerie=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADAPROVSERIE")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVEMPRESAID",gxz:"Z5013EntradaProvEmpresaId",gxold:"O5013EntradaProvEmpresaId",gxvar:"A5013EntradaProvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5013EntradaProvEmpresaId=Value},v2z:function(Value){gx.O.Z5013EntradaProvEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A5013EntradaProvEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5013EntradaProvEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVID",gxz:"Z5014EntradaProvId",gxold:"O5014EntradaProvId",gxvar:"A5014EntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5014EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5014EntradaProvId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVID",row || gx.fn.currentGridRowImpl(51),gx.O.A5014EntradaProvId,0)},c2v:function(){gx.O.A5014EntradaProvId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVTIPO",gxz:"Z5015EntradaProvTipo",gxold:"O5015EntradaProvTipo",gxvar:"A5015EntradaProvTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5015EntradaProvTipo=Value},v2z:function(Value){gx.O.Z5015EntradaProvTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("ENTRADAPROVTIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A5015EntradaProvTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5015EntradaProvTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVTIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVNUMERODOCUMENTO",gxz:"Z5016EntradaProvNumeroDocumento",gxold:"O5016EntradaProvNumeroDocumento",gxvar:"A5016EntradaProvNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5016EntradaProvNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5016EntradaProvNumeroDocumento=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVNUMERODOCUMENTO",row || gx.fn.currentGridRowImpl(51),gx.O.A5016EntradaProvNumeroDocumento,0)},c2v:function(){gx.O.A5016EntradaProvNumeroDocumento=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVNUMERODOCUMENTO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECEDOREMPID",gxz:"Z5017EntradaProvFornecedorEmpId",gxold:"O5017EntradaProvFornecedorEmpId",gxvar:"A5017EntradaProvFornecedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5017EntradaProvFornecedorEmpId=Value},v2z:function(Value){gx.O.Z5017EntradaProvFornecedorEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVFORNECEDOREMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A5017EntradaProvFornecedorEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5017EntradaProvFornecedorEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVFORNECEDOREMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVFORNECEDORID",gxz:"Z5018EntradaProvFornecedorId",gxold:"O5018EntradaProvFornecedorId",gxvar:"A5018EntradaProvFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5018EntradaProvFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5018EntradaProvFornecedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVFORNECEDORID",row || gx.fn.currentGridRowImpl(51),gx.O.A5018EntradaProvFornecedorId,0)},c2v:function(){gx.O.A5018EntradaProvFornecedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVFORNECEDORID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cEntradaProvEmpresaId = "" ;
   this.ZV6cEntradaProvEmpresaId = "" ;
   this.OV6cEntradaProvEmpresaId = "" ;
   this.AV7cEntradaProvId = 0 ;
   this.ZV7cEntradaProvId = 0 ;
   this.OV7cEntradaProvId = 0 ;
   this.AV8cEntradaProvTipo = "" ;
   this.ZV8cEntradaProvTipo = "" ;
   this.OV8cEntradaProvTipo = "" ;
   this.AV9cEntradaProvNumeroDocumento = 0 ;
   this.ZV9cEntradaProvNumeroDocumento = 0 ;
   this.OV9cEntradaProvNumeroDocumento = 0 ;
   this.AV10cEntradaProvFornecedorEmpId = "" ;
   this.ZV10cEntradaProvFornecedorEmpId = "" ;
   this.OV10cEntradaProvFornecedorEmpId = "" ;
   this.AV11cEntradaProvFornecedorId = 0 ;
   this.ZV11cEntradaProvFornecedorId = 0 ;
   this.OV11cEntradaProvFornecedorId = 0 ;
   this.AV12cEntradaProvSerie = "" ;
   this.ZV12cEntradaProvSerie = "" ;
   this.OV12cEntradaProvSerie = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z5013EntradaProvEmpresaId = "" ;
   this.O5013EntradaProvEmpresaId = "" ;
   this.Z5014EntradaProvId = 0 ;
   this.O5014EntradaProvId = 0 ;
   this.Z5015EntradaProvTipo = "" ;
   this.O5015EntradaProvTipo = "" ;
   this.Z5016EntradaProvNumeroDocumento = 0 ;
   this.O5016EntradaProvNumeroDocumento = 0 ;
   this.Z5017EntradaProvFornecedorEmpId = "" ;
   this.O5017EntradaProvFornecedorEmpId = "" ;
   this.Z5018EntradaProvFornecedorId = 0 ;
   this.O5018EntradaProvFornecedorId = 0 ;
   this.AV6cEntradaProvEmpresaId = "" ;
   this.AV7cEntradaProvId = 0 ;
   this.AV8cEntradaProvTipo = "" ;
   this.AV9cEntradaProvNumeroDocumento = 0 ;
   this.AV10cEntradaProvFornecedorEmpId = "" ;
   this.AV11cEntradaProvFornecedorId = 0 ;
   this.AV12cEntradaProvSerie = "" ;
   this.AV13pEntradaProvEmpresaId = "" ;
   this.AV14pEntradaProvId = 0 ;
   this.A5019EntradaProvSerie = "" ;
   this.AV5LinkSelection = "" ;
   this.A5013EntradaProvEmpresaId = "" ;
   this.A5014EntradaProvId = 0 ;
   this.A5015EntradaProvTipo = "" ;
   this.A5016EntradaProvNumeroDocumento = 0 ;
   this.A5017EntradaProvFornecedorEmpId = "" ;
   this.A5018EntradaProvFornecedorId = 0 ;
   this.Events = {"e131rf2_client": ["ENTER", true] ,"e141rf1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaProvEmpresaId',fld:'vCENTRADAPROVEMPRESAID'},{av:'AV7cEntradaProvId',fld:'vCENTRADAPROVID'},{av:'AV8cEntradaProvTipo',fld:'vCENTRADAPROVTIPO'},{av:'AV9cEntradaProvNumeroDocumento',fld:'vCENTRADAPROVNUMERODOCUMENTO'},{av:'AV10cEntradaProvFornecedorEmpId',fld:'vCENTRADAPROVFORNECEDOREMPID'},{av:'AV11cEntradaProvFornecedorId',fld:'vCENTRADAPROVFORNECEDORID'},{av:'AV12cEntradaProvSerie',fld:'vCENTRADAPROVSERIE'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'}],[{av:'AV13pEntradaProvEmpresaId',fld:'vPENTRADAPROVEMPRESAID'},{av:'AV14pEntradaProvId',fld:'vPENTRADAPROVID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaProvEmpresaId',fld:'vCENTRADAPROVEMPRESAID'},{av:'AV7cEntradaProvId',fld:'vCENTRADAPROVID'},{av:'AV8cEntradaProvTipo',fld:'vCENTRADAPROVTIPO'},{av:'AV9cEntradaProvNumeroDocumento',fld:'vCENTRADAPROVNUMERODOCUMENTO'},{av:'AV10cEntradaProvFornecedorEmpId',fld:'vCENTRADAPROVFORNECEDOREMPID'},{av:'AV11cEntradaProvFornecedorId',fld:'vCENTRADAPROVFORNECEDORID'},{av:'AV12cEntradaProvSerie',fld:'vCENTRADAPROVSERIE'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaProvEmpresaId',fld:'vCENTRADAPROVEMPRESAID'},{av:'AV7cEntradaProvId',fld:'vCENTRADAPROVID'},{av:'AV8cEntradaProvTipo',fld:'vCENTRADAPROVTIPO'},{av:'AV9cEntradaProvNumeroDocumento',fld:'vCENTRADAPROVNUMERODOCUMENTO'},{av:'AV10cEntradaProvFornecedorEmpId',fld:'vCENTRADAPROVFORNECEDOREMPID'},{av:'AV11cEntradaProvFornecedorId',fld:'vCENTRADAPROVFORNECEDORID'},{av:'AV12cEntradaProvSerie',fld:'vCENTRADAPROVSERIE'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaProvEmpresaId',fld:'vCENTRADAPROVEMPRESAID'},{av:'AV7cEntradaProvId',fld:'vCENTRADAPROVID'},{av:'AV8cEntradaProvTipo',fld:'vCENTRADAPROVTIPO'},{av:'AV9cEntradaProvNumeroDocumento',fld:'vCENTRADAPROVNUMERODOCUMENTO'},{av:'AV10cEntradaProvFornecedorEmpId',fld:'vCENTRADAPROVFORNECEDOREMPID'},{av:'AV11cEntradaProvFornecedorId',fld:'vCENTRADAPROVFORNECEDORID'},{av:'AV12cEntradaProvSerie',fld:'vCENTRADAPROVSERIE'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaProvEmpresaId',fld:'vCENTRADAPROVEMPRESAID'},{av:'AV7cEntradaProvId',fld:'vCENTRADAPROVID'},{av:'AV8cEntradaProvTipo',fld:'vCENTRADAPROVTIPO'},{av:'AV9cEntradaProvNumeroDocumento',fld:'vCENTRADAPROVNUMERODOCUMENTO'},{av:'AV10cEntradaProvFornecedorEmpId',fld:'vCENTRADAPROVFORNECEDOREMPID'},{av:'AV11cEntradaProvFornecedorId',fld:'vCENTRADAPROVFORNECEDORID'},{av:'AV12cEntradaProvSerie',fld:'vCENTRADAPROVSERIE'}],[]];
   this.setVCMap("AV13pEntradaProvEmpresaId", "vPENTRADAPROVEMPRESAID", 0, "char");
   this.setVCMap("AV14pEntradaProvId", "vPENTRADAPROVID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0cj0());
