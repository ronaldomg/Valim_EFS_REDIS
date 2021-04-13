/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:48:18.86
*/
gx.evt.autoSkip = false;
gx.define('gx0nr0', false, function () {
   this.ServerClass =  "gx0nr0" ;
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
      this.AV13pFilialNfeEmpresaId=gx.fn.getControlValue("vPFILIALNFEEMPRESAID") ;
      this.AV14pFilialNfeId=gx.fn.getIntegerValue("vPFILIALNFEID",'.') ;
   };
   this.e132fy2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142fy1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0nr0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11612,53,"FILIALNFEEMPRESAID","da filial","","FilialNfeEmpresaId","char",0,"px",10,10,"left",null,[],11612,"FilialNfeEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11613,54,"FILIALNFEID","da filial","","FilialNfeId","int",0,"px",7,7,"right",null,[],11613,"FilialNfeId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11615,55,"FILIALNFEDATAHORAIMP","do DANFE?","","FilialNfeDataHoraImp","char",0,"px",1,1,"left",null,[],11615,"FilialNfeDataHoraImp",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(11616,56,"FILIALNFETIPOIMPRESSAO","de DANFE","FilialNfeTipoImpressao","char",null,0,true,false,0,"px","");
   Grid1Container.addComboBox(11617,57,"FILIALNFELOCALCANHOTO","do canhoto","FilialNfeLocalCanhoto","char",null,0,true,false,0,"px","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKFILIALNFEEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALNFEEMPRESAID",gxz:"ZV6cFilialNfeEmpresaId",gxold:"OV6cFilialNfeEmpresaId",gxvar:"AV6cFilialNfeEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cFilialNfeEmpresaId=Value},v2z:function(Value){gx.O.ZV6cFilialNfeEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCFILIALNFEEMPRESAID",gx.O.AV6cFilialNfeEmpresaId,0)},c2v:function(){gx.O.AV6cFilialNfeEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALNFEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKFILIALNFEID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALNFEID",gxz:"ZV7cFilialNfeId",gxold:"OV7cFilialNfeId",gxvar:"AV7cFilialNfeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cFilialNfeId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cFilialNfeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFILIALNFEID",gx.O.AV7cFilialNfeId,0)},c2v:function(){gx.O.AV7cFilialNfeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFILIALNFEID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKFILIALNFEDATAHORAIMP", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALNFEDATAHORAIMP",gxz:"ZV8cFilialNfeDataHoraImp",gxold:"OV8cFilialNfeDataHoraImp",gxvar:"AV8cFilialNfeDataHoraImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cFilialNfeDataHoraImp=Value},v2z:function(Value){gx.O.ZV8cFilialNfeDataHoraImp=Value},v2c:function(){gx.fn.setControlValue("vCFILIALNFEDATAHORAIMP",gx.O.AV8cFilialNfeDataHoraImp,0)},c2v:function(){gx.O.AV8cFilialNfeDataHoraImp=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALNFEDATAHORAIMP")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKFILIALNFETIPOIMPRESSAO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALNFETIPOIMPRESSAO",gxz:"ZV9cFilialNfeTipoImpressao",gxold:"OV9cFilialNfeTipoImpressao",gxvar:"AV9cFilialNfeTipoImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cFilialNfeTipoImpressao=Value},v2z:function(Value){gx.O.ZV9cFilialNfeTipoImpressao=Value},v2c:function(){gx.fn.setComboBoxValue("vCFILIALNFETIPOIMPRESSAO",gx.O.AV9cFilialNfeTipoImpressao)},c2v:function(){gx.O.AV9cFilialNfeTipoImpressao=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALNFETIPOIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKFILIALNFELOCALCANHOTO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALNFELOCALCANHOTO",gxz:"ZV10cFilialNfeLocalCanhoto",gxold:"OV10cFilialNfeLocalCanhoto",gxvar:"AV10cFilialNfeLocalCanhoto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cFilialNfeLocalCanhoto=Value},v2z:function(Value){gx.O.ZV10cFilialNfeLocalCanhoto=Value},v2c:function(){gx.fn.setComboBoxValue("vCFILIALNFELOCALCANHOTO",gx.O.AV10cFilialNfeLocalCanhoto)},c2v:function(){gx.O.AV10cFilialNfeLocalCanhoto=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALNFELOCALCANHOTO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKFILIALNFEIMPTOTPISCOF", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALNFEIMPTOTPISCOF",gxz:"ZV11cFilialNfeImpTotPISCOF",gxold:"OV11cFilialNfeImpTotPISCOF",gxvar:"AV11cFilialNfeImpTotPISCOF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cFilialNfeImpTotPISCOF=Value},v2z:function(Value){gx.O.ZV11cFilialNfeImpTotPISCOF=Value},v2c:function(){gx.fn.setControlValue("vCFILIALNFEIMPTOTPISCOF",gx.O.AV11cFilialNfeImpTotPISCOF,0)},c2v:function(){gx.O.AV11cFilialNfeImpTotPISCOF=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALNFEIMPTOTPISCOF")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKFILIALNFESNIMAGEMEMITENTE", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALNFESNIMAGEMEMITENTE",gxz:"ZV12cFilialNfeSnImagemEmitente",gxold:"OV12cFilialNfeSnImagemEmitente",gxvar:"AV12cFilialNfeSnImagemEmitente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cFilialNfeSnImagemEmitente=Value},v2z:function(Value){gx.O.ZV12cFilialNfeSnImagemEmitente=Value},v2c:function(){gx.fn.setControlValue("vCFILIALNFESNIMAGEMEMITENTE",gx.O.AV12cFilialNfeSnImagemEmitente,0)},c2v:function(){gx.O.AV12cFilialNfeSnImagemEmitente=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALNFESNIMAGEMEMITENTE")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNFEEMPRESAID",gxz:"Z11612FilialNfeEmpresaId",gxold:"O11612FilialNfeEmpresaId",gxvar:"A11612FilialNfeEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11612FilialNfeEmpresaId=Value},v2z:function(Value){gx.O.Z11612FilialNfeEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALNFEEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A11612FilialNfeEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11612FilialNfeEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALNFEEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNFEID",gxz:"Z11613FilialNfeId",gxold:"O11613FilialNfeId",gxvar:"A11613FilialNfeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11613FilialNfeId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11613FilialNfeId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALNFEID",row || gx.fn.currentGridRowImpl(51),gx.O.A11613FilialNfeId,0)},c2v:function(){gx.O.A11613FilialNfeId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALNFEID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNFEDATAHORAIMP",gxz:"Z11615FilialNfeDataHoraImp",gxold:"O11615FilialNfeDataHoraImp",gxvar:"A11615FilialNfeDataHoraImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11615FilialNfeDataHoraImp=Value},v2z:function(Value){gx.O.Z11615FilialNfeDataHoraImp=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALNFEDATAHORAIMP",row || gx.fn.currentGridRowImpl(51),gx.O.A11615FilialNfeDataHoraImp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11615FilialNfeDataHoraImp=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALNFEDATAHORAIMP",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNFETIPOIMPRESSAO",gxz:"Z11616FilialNfeTipoImpressao",gxold:"O11616FilialNfeTipoImpressao",gxvar:"A11616FilialNfeTipoImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A11616FilialNfeTipoImpressao=Value},v2z:function(Value){gx.O.Z11616FilialNfeTipoImpressao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("FILIALNFETIPOIMPRESSAO",row || gx.fn.currentGridRowImpl(51),gx.O.A11616FilialNfeTipoImpressao)},c2v:function(){gx.O.A11616FilialNfeTipoImpressao=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALNFETIPOIMPRESSAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNFELOCALCANHOTO",gxz:"Z11617FilialNfeLocalCanhoto",gxold:"O11617FilialNfeLocalCanhoto",gxvar:"A11617FilialNfeLocalCanhoto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A11617FilialNfeLocalCanhoto=Value},v2z:function(Value){gx.O.Z11617FilialNfeLocalCanhoto=Value},v2c:function(row){gx.fn.setGridComboBoxValue("FILIALNFELOCALCANHOTO",row || gx.fn.currentGridRowImpl(51),gx.O.A11617FilialNfeLocalCanhoto)},c2v:function(){gx.O.A11617FilialNfeLocalCanhoto=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALNFELOCALCANHOTO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cFilialNfeEmpresaId = "" ;
   this.ZV6cFilialNfeEmpresaId = "" ;
   this.OV6cFilialNfeEmpresaId = "" ;
   this.AV7cFilialNfeId = 0 ;
   this.ZV7cFilialNfeId = 0 ;
   this.OV7cFilialNfeId = 0 ;
   this.AV8cFilialNfeDataHoraImp = "" ;
   this.ZV8cFilialNfeDataHoraImp = "" ;
   this.OV8cFilialNfeDataHoraImp = "" ;
   this.AV9cFilialNfeTipoImpressao = "" ;
   this.ZV9cFilialNfeTipoImpressao = "" ;
   this.OV9cFilialNfeTipoImpressao = "" ;
   this.AV10cFilialNfeLocalCanhoto = "" ;
   this.ZV10cFilialNfeLocalCanhoto = "" ;
   this.OV10cFilialNfeLocalCanhoto = "" ;
   this.AV11cFilialNfeImpTotPISCOF = "" ;
   this.ZV11cFilialNfeImpTotPISCOF = "" ;
   this.OV11cFilialNfeImpTotPISCOF = "" ;
   this.AV12cFilialNfeSnImagemEmitente = "" ;
   this.ZV12cFilialNfeSnImagemEmitente = "" ;
   this.OV12cFilialNfeSnImagemEmitente = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11612FilialNfeEmpresaId = "" ;
   this.O11612FilialNfeEmpresaId = "" ;
   this.Z11613FilialNfeId = 0 ;
   this.O11613FilialNfeId = 0 ;
   this.Z11615FilialNfeDataHoraImp = "" ;
   this.O11615FilialNfeDataHoraImp = "" ;
   this.Z11616FilialNfeTipoImpressao = "" ;
   this.O11616FilialNfeTipoImpressao = "" ;
   this.Z11617FilialNfeLocalCanhoto = "" ;
   this.O11617FilialNfeLocalCanhoto = "" ;
   this.AV6cFilialNfeEmpresaId = "" ;
   this.AV7cFilialNfeId = 0 ;
   this.AV8cFilialNfeDataHoraImp = "" ;
   this.AV9cFilialNfeTipoImpressao = "" ;
   this.AV10cFilialNfeLocalCanhoto = "" ;
   this.AV11cFilialNfeImpTotPISCOF = "" ;
   this.AV12cFilialNfeSnImagemEmitente = "" ;
   this.AV13pFilialNfeEmpresaId = "" ;
   this.AV14pFilialNfeId = 0 ;
   this.A11619FilialNfeSnImagemEmitente = "" ;
   this.A11618FilialNfeImpTotPISCOF = "" ;
   this.AV5LinkSelection = "" ;
   this.A11612FilialNfeEmpresaId = "" ;
   this.A11613FilialNfeId = 0 ;
   this.A11615FilialNfeDataHoraImp = "" ;
   this.A11616FilialNfeTipoImpressao = "" ;
   this.A11617FilialNfeLocalCanhoto = "" ;
   this.Events = {"e132fy2_client": ["ENTER", true] ,"e142fy1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialNfeEmpresaId',fld:'vCFILIALNFEEMPRESAID'},{av:'AV7cFilialNfeId',fld:'vCFILIALNFEID'},{av:'AV8cFilialNfeDataHoraImp',fld:'vCFILIALNFEDATAHORAIMP'},{av:'AV9cFilialNfeTipoImpressao',fld:'vCFILIALNFETIPOIMPRESSAO'},{av:'AV10cFilialNfeLocalCanhoto',fld:'vCFILIALNFELOCALCANHOTO'},{av:'AV11cFilialNfeImpTotPISCOF',fld:'vCFILIALNFEIMPTOTPISCOF'},{av:'AV12cFilialNfeSnImagemEmitente',fld:'vCFILIALNFESNIMAGEMEMITENTE'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11612FilialNfeEmpresaId',fld:'FILIALNFEEMPRESAID'},{av:'A11613FilialNfeId',fld:'FILIALNFEID'}],[{av:'AV13pFilialNfeEmpresaId',fld:'vPFILIALNFEEMPRESAID'},{av:'AV14pFilialNfeId',fld:'vPFILIALNFEID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialNfeEmpresaId',fld:'vCFILIALNFEEMPRESAID'},{av:'AV7cFilialNfeId',fld:'vCFILIALNFEID'},{av:'AV8cFilialNfeDataHoraImp',fld:'vCFILIALNFEDATAHORAIMP'},{av:'AV9cFilialNfeTipoImpressao',fld:'vCFILIALNFETIPOIMPRESSAO'},{av:'AV10cFilialNfeLocalCanhoto',fld:'vCFILIALNFELOCALCANHOTO'},{av:'AV11cFilialNfeImpTotPISCOF',fld:'vCFILIALNFEIMPTOTPISCOF'},{av:'AV12cFilialNfeSnImagemEmitente',fld:'vCFILIALNFESNIMAGEMEMITENTE'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialNfeEmpresaId',fld:'vCFILIALNFEEMPRESAID'},{av:'AV7cFilialNfeId',fld:'vCFILIALNFEID'},{av:'AV8cFilialNfeDataHoraImp',fld:'vCFILIALNFEDATAHORAIMP'},{av:'AV9cFilialNfeTipoImpressao',fld:'vCFILIALNFETIPOIMPRESSAO'},{av:'AV10cFilialNfeLocalCanhoto',fld:'vCFILIALNFELOCALCANHOTO'},{av:'AV11cFilialNfeImpTotPISCOF',fld:'vCFILIALNFEIMPTOTPISCOF'},{av:'AV12cFilialNfeSnImagemEmitente',fld:'vCFILIALNFESNIMAGEMEMITENTE'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialNfeEmpresaId',fld:'vCFILIALNFEEMPRESAID'},{av:'AV7cFilialNfeId',fld:'vCFILIALNFEID'},{av:'AV8cFilialNfeDataHoraImp',fld:'vCFILIALNFEDATAHORAIMP'},{av:'AV9cFilialNfeTipoImpressao',fld:'vCFILIALNFETIPOIMPRESSAO'},{av:'AV10cFilialNfeLocalCanhoto',fld:'vCFILIALNFELOCALCANHOTO'},{av:'AV11cFilialNfeImpTotPISCOF',fld:'vCFILIALNFEIMPTOTPISCOF'},{av:'AV12cFilialNfeSnImagemEmitente',fld:'vCFILIALNFESNIMAGEMEMITENTE'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialNfeEmpresaId',fld:'vCFILIALNFEEMPRESAID'},{av:'AV7cFilialNfeId',fld:'vCFILIALNFEID'},{av:'AV8cFilialNfeDataHoraImp',fld:'vCFILIALNFEDATAHORAIMP'},{av:'AV9cFilialNfeTipoImpressao',fld:'vCFILIALNFETIPOIMPRESSAO'},{av:'AV10cFilialNfeLocalCanhoto',fld:'vCFILIALNFELOCALCANHOTO'},{av:'AV11cFilialNfeImpTotPISCOF',fld:'vCFILIALNFEIMPTOTPISCOF'},{av:'AV12cFilialNfeSnImagemEmitente',fld:'vCFILIALNFESNIMAGEMEMITENTE'}],[]];
   this.setVCMap("AV13pFilialNfeEmpresaId", "vPFILIALNFEEMPRESAID", 0, "char");
   this.setVCMap("AV14pFilialNfeId", "vPFILIALNFEID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0nr0());
