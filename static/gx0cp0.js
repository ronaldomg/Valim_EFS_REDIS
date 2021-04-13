/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:37:8.15
*/
gx.evt.autoSkip = false;
gx.define('gx0cp0', false, function () {
   this.ServerClass =  "gx0cp0" ;
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
      this.AV15pEntradaProvItemSequencia=gx.fn.getIntegerValue("vPENTRADAPROVITEMSEQUENCIA",'.') ;
      this.AV16pDecImpProvSequencia=gx.fn.getIntegerValue("vPDECIMPPROVSEQUENCIA",'.') ;
   };
   this.e131rk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141rk1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,59];
   this.GXLastCtrlId =59;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0cp0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(5013,53,"ENTRADAPROVEMPRESAID","Empresa da Entrada Provisória","","EntradaProvEmpresaId","char",0,"px",10,10,"left",null,[],5013,"EntradaProvEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5014,54,"ENTRADAPROVID","Entrada Provisória","","EntradaProvId","int",0,"px",10,10,"right",null,[],5014,"EntradaProvId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5190,55,"ENTRADAPROVITEMSEQUENCIA","Entrada Prov Item Sequencia","","EntradaProvItemSequencia","int",0,"px",6,6,"right",null,[],5190,"EntradaProvItemSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5191,56,"DECIMPPROVSEQUENCIA","Sequência da Declaração Provisória","","DecImpProvSequencia","int",0,"px",2,2,"right",null,[],5191,"DecImpProvSequencia",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKENTRADAPROVEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAPROVEMPRESAID",gxz:"ZV6cEntradaProvEmpresaId",gxold:"OV6cEntradaProvEmpresaId",gxvar:"AV6cEntradaProvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEntradaProvEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEntradaProvEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCENTRADAPROVEMPRESAID",gx.O.AV6cEntradaProvEmpresaId,0)},c2v:function(){gx.O.AV6cEntradaProvEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADAPROVEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKENTRADAPROVID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAPROVID",gxz:"ZV7cEntradaProvId",gxold:"OV7cEntradaProvId",gxvar:"AV7cEntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cEntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cEntradaProvId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAPROVID",gx.O.AV7cEntradaProvId,0)},c2v:function(){gx.O.AV7cEntradaProvId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADAPROVID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKENTRADAPROVITEMSEQUENCIA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAPROVITEMSEQUENCIA",gxz:"ZV8cEntradaProvItemSequencia",gxold:"OV8cEntradaProvItemSequencia",gxvar:"AV8cEntradaProvItemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cEntradaProvItemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cEntradaProvItemSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAPROVITEMSEQUENCIA",gx.O.AV8cEntradaProvItemSequencia,0)},c2v:function(){gx.O.AV8cEntradaProvItemSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADAPROVITEMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKDECIMPPROVSEQUENCIA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDECIMPPROVSEQUENCIA",gxz:"ZV9cDecImpProvSequencia",gxold:"OV9cDecImpProvSequencia",gxvar:"AV9cDecImpProvSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cDecImpProvSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cDecImpProvSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCDECIMPPROVSEQUENCIA",gx.O.AV9cDecImpProvSequencia,0)},c2v:function(){gx.O.AV9cDecImpProvSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCDECIMPPROVSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKDECIMPPROVNODI", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDECIMPPROVNODI",gxz:"ZV10cDecImpProvNoDI",gxold:"OV10cDecImpProvNoDI",gxvar:"AV10cDecImpProvNoDI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cDecImpProvNoDI=Value},v2z:function(Value){gx.O.ZV10cDecImpProvNoDI=Value},v2c:function(){gx.fn.setControlValue("vCDECIMPPROVNODI",gx.O.AV10cDecImpProvNoDI,0)},c2v:function(){gx.O.AV10cDecImpProvNoDI=this.val()},val:function(){return gx.fn.getControlValue("vCDECIMPPROVNODI")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKDECIMPPROVDATAREGISTRO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDECIMPPROVDATAREGISTRO",gxz:"ZV11cDecImpProvDataRegistro",gxold:"OV11cDecImpProvDataRegistro",gxvar:"AV11cDecImpProvDataRegistro",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cDecImpProvDataRegistro=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cDecImpProvDataRegistro=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCDECIMPPROVDATAREGISTRO",gx.O.AV11cDecImpProvDataRegistro,0)},c2v:function(){gx.O.AV11cDecImpProvDataRegistro=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCDECIMPPROVDATAREGISTRO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKDECIMPPROVEXPORTADOR", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDECIMPPROVEXPORTADOR",gxz:"ZV12cDecImpProvExportador",gxold:"OV12cDecImpProvExportador",gxvar:"AV12cDecImpProvExportador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cDecImpProvExportador=Value},v2z:function(Value){gx.O.ZV12cDecImpProvExportador=Value},v2c:function(){gx.fn.setControlValue("vCDECIMPPROVEXPORTADOR",gx.O.AV12cDecImpProvExportador,0)},c2v:function(){gx.O.AV12cDecImpProvExportador=this.val()},val:function(){return gx.fn.getControlValue("vCDECIMPPROVEXPORTADOR")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVEMPRESAID",gxz:"Z5013EntradaProvEmpresaId",gxold:"O5013EntradaProvEmpresaId",gxvar:"A5013EntradaProvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5013EntradaProvEmpresaId=Value},v2z:function(Value){gx.O.Z5013EntradaProvEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A5013EntradaProvEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5013EntradaProvEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAPROVEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVID",gxz:"Z5014EntradaProvId",gxold:"O5014EntradaProvId",gxvar:"A5014EntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5014EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5014EntradaProvId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVID",row || gx.fn.currentGridRowImpl(51),gx.O.A5014EntradaProvId,0)},c2v:function(){gx.O.A5014EntradaProvId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMSEQUENCIA",gxz:"Z5190EntradaProvItemSequencia",gxold:"O5190EntradaProvItemSequencia",gxvar:"A5190EntradaProvItemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5190EntradaProvItemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5190EntradaProvItemSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAPROVITEMSEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A5190EntradaProvItemSequencia,0)},c2v:function(){gx.O.A5190EntradaProvItemSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAPROVITEMSEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPPROVSEQUENCIA",gxz:"Z5191DecImpProvSequencia",gxold:"O5191DecImpProvSequencia",gxvar:"A5191DecImpProvSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5191DecImpProvSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5191DecImpProvSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DECIMPPROVSEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A5191DecImpProvSequencia,0)},c2v:function(){gx.O.A5191DecImpProvSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DECIMPPROVSEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE4",grid:0};
   this.AV6cEntradaProvEmpresaId = "" ;
   this.ZV6cEntradaProvEmpresaId = "" ;
   this.OV6cEntradaProvEmpresaId = "" ;
   this.AV7cEntradaProvId = 0 ;
   this.ZV7cEntradaProvId = 0 ;
   this.OV7cEntradaProvId = 0 ;
   this.AV8cEntradaProvItemSequencia = 0 ;
   this.ZV8cEntradaProvItemSequencia = 0 ;
   this.OV8cEntradaProvItemSequencia = 0 ;
   this.AV9cDecImpProvSequencia = 0 ;
   this.ZV9cDecImpProvSequencia = 0 ;
   this.OV9cDecImpProvSequencia = 0 ;
   this.AV10cDecImpProvNoDI = "" ;
   this.ZV10cDecImpProvNoDI = "" ;
   this.OV10cDecImpProvNoDI = "" ;
   this.AV11cDecImpProvDataRegistro = gx.date.nullDate() ;
   this.ZV11cDecImpProvDataRegistro = gx.date.nullDate() ;
   this.OV11cDecImpProvDataRegistro = gx.date.nullDate() ;
   this.AV12cDecImpProvExportador = "" ;
   this.ZV12cDecImpProvExportador = "" ;
   this.OV12cDecImpProvExportador = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z5013EntradaProvEmpresaId = "" ;
   this.O5013EntradaProvEmpresaId = "" ;
   this.Z5014EntradaProvId = 0 ;
   this.O5014EntradaProvId = 0 ;
   this.Z5190EntradaProvItemSequencia = 0 ;
   this.O5190EntradaProvItemSequencia = 0 ;
   this.Z5191DecImpProvSequencia = 0 ;
   this.O5191DecImpProvSequencia = 0 ;
   this.AV6cEntradaProvEmpresaId = "" ;
   this.AV7cEntradaProvId = 0 ;
   this.AV8cEntradaProvItemSequencia = 0 ;
   this.AV9cDecImpProvSequencia = 0 ;
   this.AV10cDecImpProvNoDI = "" ;
   this.AV11cDecImpProvDataRegistro = gx.date.nullDate() ;
   this.AV12cDecImpProvExportador = "" ;
   this.AV13pEntradaProvEmpresaId = "" ;
   this.AV14pEntradaProvId = 0 ;
   this.AV15pEntradaProvItemSequencia = 0 ;
   this.AV16pDecImpProvSequencia = 0 ;
   this.A5184DecImpProvExportador = "" ;
   this.A5183DecImpProvDataRegistro = gx.date.nullDate() ;
   this.A5182DecImpProvNoDI = "" ;
   this.AV5LinkSelection = "" ;
   this.A5013EntradaProvEmpresaId = "" ;
   this.A5014EntradaProvId = 0 ;
   this.A5190EntradaProvItemSequencia = 0 ;
   this.A5191DecImpProvSequencia = 0 ;
   this.Events = {"e131rk2_client": ["ENTER", true] ,"e141rk1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaProvEmpresaId',fld:'vCENTRADAPROVEMPRESAID'},{av:'AV7cEntradaProvId',fld:'vCENTRADAPROVID'},{av:'AV8cEntradaProvItemSequencia',fld:'vCENTRADAPROVITEMSEQUENCIA'},{av:'AV9cDecImpProvSequencia',fld:'vCDECIMPPROVSEQUENCIA'},{av:'AV10cDecImpProvNoDI',fld:'vCDECIMPPROVNODI'},{av:'AV11cDecImpProvDataRegistro',fld:'vCDECIMPPROVDATAREGISTRO'},{av:'AV12cDecImpProvExportador',fld:'vCDECIMPPROVEXPORTADOR'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A5013EntradaProvEmpresaId',fld:'ENTRADAPROVEMPRESAID'},{av:'A5014EntradaProvId',fld:'ENTRADAPROVID'},{av:'A5190EntradaProvItemSequencia',fld:'ENTRADAPROVITEMSEQUENCIA'},{av:'A5191DecImpProvSequencia',fld:'DECIMPPROVSEQUENCIA'}],[{av:'AV13pEntradaProvEmpresaId',fld:'vPENTRADAPROVEMPRESAID'},{av:'AV14pEntradaProvId',fld:'vPENTRADAPROVID'},{av:'AV15pEntradaProvItemSequencia',fld:'vPENTRADAPROVITEMSEQUENCIA'},{av:'AV16pDecImpProvSequencia',fld:'vPDECIMPPROVSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaProvEmpresaId',fld:'vCENTRADAPROVEMPRESAID'},{av:'AV7cEntradaProvId',fld:'vCENTRADAPROVID'},{av:'AV8cEntradaProvItemSequencia',fld:'vCENTRADAPROVITEMSEQUENCIA'},{av:'AV9cDecImpProvSequencia',fld:'vCDECIMPPROVSEQUENCIA'},{av:'AV10cDecImpProvNoDI',fld:'vCDECIMPPROVNODI'},{av:'AV11cDecImpProvDataRegistro',fld:'vCDECIMPPROVDATAREGISTRO'},{av:'AV12cDecImpProvExportador',fld:'vCDECIMPPROVEXPORTADOR'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaProvEmpresaId',fld:'vCENTRADAPROVEMPRESAID'},{av:'AV7cEntradaProvId',fld:'vCENTRADAPROVID'},{av:'AV8cEntradaProvItemSequencia',fld:'vCENTRADAPROVITEMSEQUENCIA'},{av:'AV9cDecImpProvSequencia',fld:'vCDECIMPPROVSEQUENCIA'},{av:'AV10cDecImpProvNoDI',fld:'vCDECIMPPROVNODI'},{av:'AV11cDecImpProvDataRegistro',fld:'vCDECIMPPROVDATAREGISTRO'},{av:'AV12cDecImpProvExportador',fld:'vCDECIMPPROVEXPORTADOR'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaProvEmpresaId',fld:'vCENTRADAPROVEMPRESAID'},{av:'AV7cEntradaProvId',fld:'vCENTRADAPROVID'},{av:'AV8cEntradaProvItemSequencia',fld:'vCENTRADAPROVITEMSEQUENCIA'},{av:'AV9cDecImpProvSequencia',fld:'vCDECIMPPROVSEQUENCIA'},{av:'AV10cDecImpProvNoDI',fld:'vCDECIMPPROVNODI'},{av:'AV11cDecImpProvDataRegistro',fld:'vCDECIMPPROVDATAREGISTRO'},{av:'AV12cDecImpProvExportador',fld:'vCDECIMPPROVEXPORTADOR'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaProvEmpresaId',fld:'vCENTRADAPROVEMPRESAID'},{av:'AV7cEntradaProvId',fld:'vCENTRADAPROVID'},{av:'AV8cEntradaProvItemSequencia',fld:'vCENTRADAPROVITEMSEQUENCIA'},{av:'AV9cDecImpProvSequencia',fld:'vCDECIMPPROVSEQUENCIA'},{av:'AV10cDecImpProvNoDI',fld:'vCDECIMPPROVNODI'},{av:'AV11cDecImpProvDataRegistro',fld:'vCDECIMPPROVDATAREGISTRO'},{av:'AV12cDecImpProvExportador',fld:'vCDECIMPPROVEXPORTADOR'}],[]];
   this.setVCMap("AV13pEntradaProvEmpresaId", "vPENTRADAPROVEMPRESAID", 0, "char");
   this.setVCMap("AV14pEntradaProvId", "vPENTRADAPROVID", 0, "int");
   this.setVCMap("AV15pEntradaProvItemSequencia", "vPENTRADAPROVITEMSEQUENCIA", 0, "int");
   this.setVCMap("AV16pDecImpProvSequencia", "vPDECIMPPROVSEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0cp0());
