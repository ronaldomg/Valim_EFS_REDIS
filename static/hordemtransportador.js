/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:7:52.59
*/
gx.evt.autoSkip = false;
gx.define('hordemtransportador', false, function () {
   this.ServerClass =  "hordemtransportador" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV19SdtTransportador=gx.fn.getControlValue("vSDTTRANSPORTADOR") ;
      this.A3378TransportadorEmpresaId=gx.fn.getControlValue("TRANSPORTADOREMPRESAID") ;
      this.A3379TransportadorCodigo=gx.fn.getIntegerValue("TRANSPORTADORCODIGO",'.') ;
      this.A3798TransportadorNome=gx.fn.getControlValue("TRANSPORTADORNOME") ;
   };
   this.Validv_Transportadorcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSPORTADORCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Transportadorempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTRANSPORTADOREMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112ay2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e122ay2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152ay2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTRANSPORTADOR'", true, arguments[0], false, false);
   };
   this.e132ay2_client=function()
   {
      this.executeServerEvent("'NOVOTRANSPORTADOR'", true, null, false, false);
   };
   this.e172ay2_client=function()
   {
      this.executeServerEvent("VTRANSPORTADORCODIGO.ISVALID", true, arguments[0], false, false);
   };
   this.e182ay2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,16,17,18,19,20,21,22,28,34,35,37];
   this.GXLastCtrlId =37;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",14,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hordemtransportador",[],false,1,false,true,0,true,false,false,"CollSdtTransportador.SdtTransportadorItem",0,"px","Novo registro",true,false,true,null,null,false,"AV19SdtTransportador",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Transportadorcodigo",15,"vTRANSPORTADORCODIGO","Código","","TransportadorCodigo","int",0,"px",6,6,"right",null,[],"Transportadorcodigo","TransportadorCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",16,0,"px",17,"px",null,"","","Image","GridColumnImage");
   GridContainer.addSingleLineEdit("Transportadornome",17,"vTRANSPORTADORNOME","Nome","","TransportadorNome","svchar",0,"px",60,60,"left",null,[],"Transportadornome","TransportadorNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",18,0,"px",17,"px","e152ay2_client","","","Image","GridColumnImage");
   GridContainer.addSingleLineEdit("GXV10J",19,"CTLCODIGO","Código Transportador","","Codigo","int",0,"px",6,6,"right",null,[],"GXV10J","GXV10J",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10K",20,"CTLNOME","Nome Transportador","","Nome","svchar",0,"px",60,60,"left",null,[],"GXV10K","GXV10K",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10L",21,"CTLINDICE","Indice","","Indice","int",0,"px",4,4,"right",null,[],"GXV10L","GXV10L",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE4",grid:0};
   GXValidFnc[11]={fld:"IMGNOVO",grid:0};
   GXValidFnc[13]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[15]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:this.Validv_Transportadorcodigo,isvalid:'e172ay2_client',rgrid:[],fld:"vTRANSPORTADORCODIGO",gxz:"ZV20TransportadorCodigo",gxold:"OV20TransportadorCodigo",gxvar:"AV20TransportadorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20TransportadorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20TransportadorCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTRANSPORTADORCODIGO",row || gx.fn.currentGridRowImpl(14),gx.O.AV20TransportadorCodigo,0)},c2v:function(){gx.O.AV20TransportadorCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTRANSPORTADORCODIGO",row || gx.fn.currentGridRowImpl(14),'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV22bmpcon",gxold:"OV22bmpcon",gxvar:"AV22bmpcon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpcon=Value},v2z:function(Value){gx.O.ZV22bmpcon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(14),gx.O.AV22bmpcon,gx.O.AV48Bmpcon_GXI)},c2v:function(){gx.O.AV48Bmpcon_GXI=this.val_GXI();gx.O.AV22bmpcon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(14))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(14))}, gxvar_GXI:'AV48Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSPORTADORNOME",gxz:"ZV21TransportadorNome",gxold:"OV21TransportadorNome",gxvar:"AV21TransportadorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV21TransportadorNome=Value},v2z:function(Value){gx.O.ZV21TransportadorNome=Value},v2c:function(row){gx.fn.setGridControlValue("vTRANSPORTADORNOME",row || gx.fn.currentGridRowImpl(14),gx.O.AV21TransportadorNome,0)},c2v:function(){gx.O.AV21TransportadorNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vTRANSPORTADORNOME",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[18]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV23bmpexc",gxold:"OV23bmpexc",gxvar:"AV23bmpexc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23bmpexc=Value},v2z:function(Value){gx.O.ZV23bmpexc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(14),gx.O.AV23bmpexc,gx.O.AV49Bmpexc_GXI)},c2v:function(){gx.O.AV49Bmpexc_GXI=this.val_GXI();gx.O.AV23bmpexc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(14))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(14))}, gxvar_GXI:'AV49Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLCODIGO",gxz:"ZV43GXV10J",gxold:"OV43GXV10J",gxvar:"GXV10J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10J=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43GXV10J=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLCODIGO",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10J,0)},c2v:function(){gx.O.GXV10J=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLCODIGO",row || gx.fn.currentGridRowImpl(14),'.')},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNOME",gxz:"ZV44GXV10K",gxold:"OV44GXV10K",gxvar:"GXV10K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10K=Value},v2z:function(Value){gx.O.ZV44GXV10K=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNOME",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10K,0)},c2v:function(){gx.O.GXV10K=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNOME",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:14,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLINDICE",gxz:"ZV45GXV10L",gxold:"OV45GXV10L",gxvar:"GXV10L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10L=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45GXV10L=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLINDICE",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10L,0)},c2v:function(){gx.O.GXV10L=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLINDICE",row || gx.fn.currentGridRowImpl(14),'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRANSPORTADORCODIGOINI",gxz:"ZV24TransportadorCodigoIni",gxold:"OV24TransportadorCodigoIni",gxvar:"AV24TransportadorCodigoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TransportadorCodigoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24TransportadorCodigoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRANSPORTADORCODIGOINI",gx.O.AV24TransportadorCodigoIni,0)},c2v:function(){gx.O.AV24TransportadorCodigoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRANSPORTADORCODIGOINI",'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Transportadorempresaid,isvalid:null,rgrid:[],fld:"vTRANSPORTADOREMPRESAID",gxz:"ZV28TransportadorEmpresaId",gxold:"OV28TransportadorEmpresaId",gxvar:"AV28TransportadorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TransportadorEmpresaId=Value},v2z:function(Value){gx.O.ZV28TransportadorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTRANSPORTADOREMPRESAID",gx.O.AV28TransportadorEmpresaId,0)},c2v:function(){gx.O.AV28TransportadorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTRANSPORTADOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   this.ZV20TransportadorCodigo = 0 ;
   this.OV20TransportadorCodigo = 0 ;
   this.ZV22bmpcon = "" ;
   this.OV22bmpcon = "" ;
   this.ZV21TransportadorNome = "" ;
   this.OV21TransportadorNome = "" ;
   this.ZV23bmpexc = "" ;
   this.OV23bmpexc = "" ;
   this.ZV43GXV10J = 0 ;
   this.OV43GXV10J = 0 ;
   this.ZV44GXV10K = "" ;
   this.OV44GXV10K = "" ;
   this.ZV45GXV10L = 0 ;
   this.OV45GXV10L = 0 ;
   this.AV24TransportadorCodigoIni = 0 ;
   this.ZV24TransportadorCodigoIni = 0 ;
   this.OV24TransportadorCodigoIni = 0 ;
   this.AV28TransportadorEmpresaId = "" ;
   this.ZV28TransportadorEmpresaId = "" ;
   this.OV28TransportadorEmpresaId = "" ;
   this.AV24TransportadorCodigoIni = 0 ;
   this.AV28TransportadorEmpresaId = "" ;
   this.AV20TransportadorCodigo = 0 ;
   this.AV22bmpcon = "" ;
   this.AV21TransportadorNome = "" ;
   this.AV23bmpexc = "" ;
   this.GXV10J = 0 ;
   this.GXV10K = "" ;
   this.GXV10L = 0 ;
   this.A3379TransportadorCodigo = 0 ;
   this.A3378TransportadorEmpresaId = "" ;
   this.A3798TransportadorNome = "" ;
   this.A10979TransportadorOrdem = 0 ;
   this.AV19SdtTransportador = [ ] ;
   this.Events = {"e112ay2_client": ["'FECHAR'", true] ,"e122ay2_client": ["ENTER", true] ,"e152ay2_client": ["'EXCLUIRTRANSPORTADOR'", true] ,"e132ay2_client": ["'NOVOTRANSPORTADOR'", true] ,"e172ay2_client": ["VTRANSPORTADORCODIGO.ISVALID", true] ,"e182ay2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22bmpcon',fld:'vBMPCON'},{av:'AV23bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV19SdtTransportador',fld:'vSDTTRANSPORTADOR',grid:14},{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV28TransportadorEmpresaId',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV32SnErro',fld:'vSNERRO'},{av:'AV19SdtTransportador',fld:'vSDTTRANSPORTADOR',grid:14},{av:'AV26SnExcluirLinha',fld:'vSNEXCLUIRLINHA'},{av:'AV20TransportadorCodigo',fld:'vTRANSPORTADORCODIGO',grid:14},{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV28TransportadorEmpresaId',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'}],[{av:'AV30ContGrid',fld:'vCONTGRID'},{av:'AV29ContSdt',fld:'vCONTSDT'},{av:'AV54GXV2',fld:'vGXV2'},{av:'AV27SdtTransportadorItem',fld:'vSDTTRANSPORTADORITEM'},{av:'AV32SnErro',fld:'vSNERRO'},{av:'AV31NumLinha',fld:'vNUMLINHA'},{av:'AV51GXLvl66',fld:'vGXLVL66'}]];
   this.EvtParms["'EXCLUIRTRANSPORTADOR'"] = [[{av:'AV19SdtTransportador',fld:'vSDTTRANSPORTADOR',grid:14},{av:'AV26SnExcluirLinha',fld:'vSNEXCLUIRLINHA'},{av:'AV20TransportadorCodigo',fld:'vTRANSPORTADORCODIGO',grid:14},{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV28TransportadorEmpresaId',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22bmpcon',fld:'vBMPCON',grid:14},{av:'AV23bmpexc',fld:'vBMPEXC',grid:14},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'}],[{av:'AV25Idx',fld:'vIDX'},{av:'AV26SnExcluirLinha',fld:'vSNEXCLUIRLINHA'},{av:'AV19SdtTransportador',fld:'vSDTTRANSPORTADOR',grid:14},{av:'AV30ContGrid',fld:'vCONTGRID'},{av:'AV29ContSdt',fld:'vCONTSDT'},{av:'AV54GXV2',fld:'vGXV2'},{av:'AV27SdtTransportadorItem',fld:'vSDTTRANSPORTADORITEM'}]];
   this.EvtParms["'NOVOTRANSPORTADOR'"] = [[{av:'AV19SdtTransportador',fld:'vSDTTRANSPORTADOR',grid:14},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22bmpcon',fld:'vBMPCON'},{av:'AV23bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV28TransportadorEmpresaId',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'}],[{av:'AV27SdtTransportadorItem',fld:'vSDTTRANSPORTADORITEM'},{av:'AV19SdtTransportador',fld:'vSDTTRANSPORTADOR',grid:14}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV19SdtTransportador',fld:'vSDTTRANSPORTADOR',grid:14},{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV28TransportadorEmpresaId',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'}],[{av:'AV20TransportadorCodigo',fld:'vTRANSPORTADORCODIGO'},{av:'AV21TransportadorNome',fld:'vTRANSPORTADORNOME'}]];
   this.EvtParms["VTRANSPORTADORCODIGO.ISVALID"] = [[{av:'AV20TransportadorCodigo',fld:'vTRANSPORTADORCODIGO',grid:14},{av:'AV26SnExcluirLinha',fld:'vSNEXCLUIRLINHA'},{av:'AV19SdtTransportador',fld:'vSDTTRANSPORTADOR',grid:14},{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV28TransportadorEmpresaId',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'}],[{av:'AV21TransportadorNome',fld:'vTRANSPORTADORNOME'},{av:'AV30ContGrid',fld:'vCONTGRID'},{av:'AV29ContSdt',fld:'vCONTSDT'},{av:'AV54GXV2',fld:'vGXV2'},{av:'AV27SdtTransportadorItem',fld:'vSDTTRANSPORTADORITEM'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22bmpcon',fld:'vBMPCON'},{av:'AV23bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV28TransportadorEmpresaId',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'AV19SdtTransportador',fld:'vSDTTRANSPORTADOR',grid:14}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22bmpcon',fld:'vBMPCON'},{av:'AV23bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV28TransportadorEmpresaId',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'AV19SdtTransportador',fld:'vSDTTRANSPORTADOR',grid:14}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22bmpcon',fld:'vBMPCON'},{av:'AV23bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV28TransportadorEmpresaId',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'AV19SdtTransportador',fld:'vSDTTRANSPORTADOR',grid:14}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22bmpcon',fld:'vBMPCON'},{av:'AV23bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'A3378TransportadorEmpresaId',fld:'TRANSPORTADOREMPRESAID'},{av:'AV28TransportadorEmpresaId',fld:'vTRANSPORTADOREMPRESAID'},{av:'A3379TransportadorCodigo',fld:'TRANSPORTADORCODIGO'},{av:'A3798TransportadorNome',fld:'TRANSPORTADORNOME'},{av:'AV19SdtTransportador',fld:'vSDTTRANSPORTADOR',grid:14}],[]];
   this.setPrompt("&BMPCON", [15]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19SdtTransportador", "vSDTTRANSPORTADOR", 0, "CollSdtTransportador.SdtTransportadorItem");
   this.setVCMap("A3378TransportadorEmpresaId", "TRANSPORTADOREMPRESAID", 0, "char");
   this.setVCMap("A3379TransportadorCodigo", "TRANSPORTADORCODIGO", 0, "int");
   this.setVCMap("A3798TransportadorNome", "TRANSPORTADORNOME", 0, "svchar");
   this.setVCMap("AV19SdtTransportador", "vSDTTRANSPORTADOR", 0, "CollSdtTransportador.SdtTransportadorItem");
   this.setVCMap("A3378TransportadorEmpresaId", "TRANSPORTADOREMPRESAID", 0, "char");
   this.setVCMap("A3379TransportadorCodigo", "TRANSPORTADORCODIGO", 0, "int");
   this.setVCMap("A3798TransportadorNome", "TRANSPORTADORNOME", 0, "svchar");
   GridContainer.addRefreshingVar({rfrVar:"AV22bmpcon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV23bmpexc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV23bmpexc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV19SdtTransportador"});
   GridContainer.addRefreshingVar({rfrVar:"A3378TransportadorEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar({rfrVar:"A3379TransportadorCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"A3798TransportadorNome"});
   this.addGridBCProperty("Sdttransportador", ["Codigo"], this.GXValidFnc[19], "AV19SdtTransportador");
   this.addGridBCProperty("Sdttransportador", ["Nome"], this.GXValidFnc[20], "AV19SdtTransportador");
   this.addGridBCProperty("Sdttransportador", ["Indice"], this.GXValidFnc[21], "AV19SdtTransportador");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hordemtransportador());
