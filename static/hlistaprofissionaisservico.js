/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 17:47:2.10
*/
gx.evt.autoSkip=!1;gx.define("hlistaprofissionaisservico",!1,function(){var n,t;this.ServerClass="hlistaprofissionaisservico";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV39OrdemServicoEmpresaId=gx.fn.getControlValue("vORDEMSERVICOEMPRESAID");this.AV40AparelhoEmpresaId=gx.fn.getControlValue("vAPARELHOEMPRESAID");this.AV33OrdemServicoAparelhoId=gx.fn.getIntegerValue("vORDEMSERVICOAPARELHOID",".");this.AV38OrdemServicoApareSeq=gx.fn.getIntegerValue("vORDEMSERVICOAPARESEQ",".");this.AV51OSItemServicoSequencia=gx.fn.getIntegerValue("vOSITEMSERVICOSEQUENCIA",".");this.AV44Modo=gx.fn.getControlValue("vMODO")};this.Validv_Ordemservicoid=function(){try{var n=gx.util.balloon.getNew("vORDEMSERVICOID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e111f42_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e121f42_client=function(){this.executeServerEvent("'CONFIRMA'",!1,null,!1,!1)};this.e141f42_client=function(){this.executeServerEvent("CTLPROFISSIONALSEL.CLICK",!0,arguments[0],!1,!1)};this.e161f42_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e171f42_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,12,14,17,19,21,24,26,27,28,29,39];this.GXLastCtrlId=39;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",25,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hlistaprofissionaisservico",[],!1,1,!0,!0,0,!1,!1,!1,"CollAparelhoProfissional.AparelhoProfissionalItem",0,"px","Novo registro",!1,!1,!1,null,null,!1,"AV45SdtAparelhoProfissional",!1,[1,1,1,1]);t=this.Grid1Container;t.addSingleLineEdit("GXV10Q",26,"CTLPROFISSIONALID","Profissional","","Profissionalid","int",0,"px",4,4,"right",null,[],"GXV10Q","GXV10Q",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("GXV10R",27,"CTLPROFISSIONALNOME","Nome","","Profissionalnome","svchar",210,"px",40,40,"left",null,[],"GXV10R","GXV10R",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addCheckBox("GXV10S",28,"CTLPROFISSIONALSEL","","","ProfissionalSel","char","S","N","e141f42_client",!0,!1,0,"px","");this.setGrid(t);n[2]={fld:"TABLE4",grid:0};n[5]={fld:"TABLE3",grid:0};n[8]={fld:"TEXTBLOCK1",format:0,grid:0};n[10]={lvl:0,type:"int",len:9,dec:0,sign:!1,pic:"ZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Ordemservicoid,isvalid:null,rgrid:[],fld:"vORDEMSERVICOID",gxz:"ZV32OrdemServicoId",gxold:"OV32OrdemServicoId",gxvar:"AV32OrdemServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV32OrdemServicoId=gx.num.intval(n)},v2z:function(n){gx.O.ZV32OrdemServicoId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEMSERVICOID",gx.O.AV32OrdemServicoId,0)},c2v:function(){gx.O.AV32OrdemServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEMSERVICOID",".")},nac:gx.falseFn};n[12]={fld:"APARELHO",format:0,grid:0};n[14]={fld:"TABLE5",grid:0};n[17]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERVICOCODIGO",gxz:"ZV50ServicoCodigo",gxold:"OV50ServicoCodigo",gxvar:"AV50ServicoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV50ServicoCodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV50ServicoCodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSERVICOCODIGO",gx.O.AV50ServicoCodigo,0)},c2v:function(){gx.O.AV50ServicoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSERVICOCODIGO",".")},nac:gx.falseFn};n[19]={fld:"TEXTBLOCK2",format:0,grid:0};n[21]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERVICODESCRICAO",gxz:"ZV49ServicoDescricao",gxold:"OV49ServicoDescricao",gxvar:"AV49ServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV49ServicoDescricao=n},v2z:function(n){gx.O.ZV49ServicoDescricao=n},v2c:function(){gx.fn.setControlValue("vSERVICODESCRICAO",gx.O.AV49ServicoDescricao,0)},c2v:function(){gx.O.AV49ServicoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSERVICODESCRICAO")},nac:gx.falseFn};n[24]={fld:"DIV1",format:2,grid:0};n[26]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROFISSIONALID",gxz:"ZV59GXV10Q",gxold:"OV59GXV10Q",gxvar:"GXV10Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV10Q=gx.num.intval(n)},v2z:function(n){gx.O.ZV59GXV10Q=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLPROFISSIONALID",n||gx.fn.currentGridRowImpl(25),gx.O.GXV10Q,0)},c2v:function(){gx.O.GXV10Q=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLPROFISSIONALID",n||gx.fn.currentGridRowImpl(25),".")},nac:gx.falseFn};n[27]={lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROFISSIONALNOME",gxz:"ZV60GXV10R",gxold:"OV60GXV10R",gxvar:"GXV10R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV10R=n},v2z:function(n){gx.O.ZV60GXV10R=n},v2c:function(n){gx.fn.setGridControlValue("CTLPROFISSIONALNOME",n||gx.fn.currentGridRowImpl(25),gx.O.GXV10R,0)},c2v:function(){gx.O.GXV10R=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLPROFISSIONALNOME",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[28]={lvl:2,type:"char",len:1,dec:0,sign:!1,ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPROFISSIONALSEL",gxz:"ZV61GXV10S",gxold:"OV61GXV10S",gxvar:"GXV10S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){gx.O.GXV10S=n},v2z:function(n){gx.O.ZV61GXV10S=n},v2c:function(n){gx.fn.setGridCheckBoxValue("CTLPROFISSIONALSEL",n||gx.fn.currentGridRowImpl(25),gx.O.GXV10S,"S")},c2v:function(){gx.O.GXV10S=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLPROFISSIONALSEL",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn,values:["S","N"]};n[29]={fld:"DIV2",format:2,grid:0};n[39]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROSERVICO",gxz:"ZV55PROSERVICO",gxold:"OV55PROSERVICO",gxvar:"AV55PROSERVICO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV55PROSERVICO=n},v2z:function(n){gx.O.ZV55PROSERVICO=n},v2c:function(){gx.fn.setControlValue("vPROSERVICO",gx.O.AV55PROSERVICO,0)},c2v:function(){gx.O.AV55PROSERVICO=this.val()},val:function(){return gx.fn.getControlValue("vPROSERVICO")},nac:gx.falseFn};this.AV32OrdemServicoId=0;this.ZV32OrdemServicoId=0;this.OV32OrdemServicoId=0;this.AV50ServicoCodigo=0;this.ZV50ServicoCodigo=0;this.OV50ServicoCodigo=0;this.AV49ServicoDescricao="";this.ZV49ServicoDescricao="";this.OV49ServicoDescricao="";this.ZV59GXV10Q=0;this.OV59GXV10Q=0;this.ZV60GXV10R="";this.OV60GXV10R="";this.ZV61GXV10S="";this.OV61GXV10S="";this.AV55PROSERVICO="";this.ZV55PROSERVICO="";this.OV55PROSERVICO="";this.AV32OrdemServicoId=0;this.AV50ServicoCodigo=0;this.AV49ServicoDescricao="";this.AV55PROSERVICO="";this.AV39OrdemServicoEmpresaId="";this.AV40AparelhoEmpresaId="";this.AV33OrdemServicoAparelhoId=0;this.AV38OrdemServicoApareSeq=0;this.AV51OSItemServicoSequencia=0;this.AV44Modo="";this.GXV10Q=0;this.GXV10R="";this.GXV10S="";this.A8567ProfissionalEmpresaId="";this.A8566ProfissionalId=0;this.A8922SituacaoProfissional="";this.A8608ProfissionalNome="";this.A9263ProfissionalServicoProEmpId="";this.A9264ProfissionalServicoProId=0;this.A9262OSItemServicoSeq=0;this.A9261OSItemServicoApareSeq=0;this.A9260OSItemServicoApareId=0;this.A9259OSItemServicoApareEmpId="";this.A9258OSItemServicoOSId=0;this.A9257OSItemServicoOSEmpId="";this.A9256ProfissionalServicoProNome="";this.Events={e111f42_client:["'FECHAR'",!0],e121f42_client:["'CONFIRMA'",!0],e141f42_client:["CTLPROFISSIONALSEL.CLICK",!0],e161f42_client:["ENTER",!0],e171f42_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"AV45SdtAparelhoProfissional",fld:"vSDTAPARELHOPROFISSIONAL",grid:25}],[]];this.EvtParms["'FECHAR'"]=[[{av:"AV44Modo",fld:"vMODO"},{av:"AV51OSItemServicoSequencia",fld:"vOSITEMSERVICOSEQUENCIA"},{av:"AV38OrdemServicoApareSeq",fld:"vORDEMSERVICOAPARESEQ"},{av:"AV50ServicoCodigo",fld:"vSERVICOCODIGO"},{av:"AV49ServicoDescricao",fld:"vSERVICODESCRICAO"},{av:"AV33OrdemServicoAparelhoId",fld:"vORDEMSERVICOAPARELHOID"},{av:"AV40AparelhoEmpresaId",fld:"vAPARELHOEMPRESAID"},{av:"AV32OrdemServicoId",fld:"vORDEMSERVICOID"},{av:"AV39OrdemServicoEmpresaId",fld:"vORDEMSERVICOEMPRESAID"}],[]];this.EvtParms["'CONFIRMA'"]=[[{av:"AV44Modo",fld:"vMODO"},{av:"AV53isOK",fld:"vISOK"},{av:"AV39OrdemServicoEmpresaId",fld:"vORDEMSERVICOEMPRESAID"},{av:"AV32OrdemServicoId",fld:"vORDEMSERVICOID"},{av:"AV40AparelhoEmpresaId",fld:"vAPARELHOEMPRESAID"},{av:"AV33OrdemServicoAparelhoId",fld:"vORDEMSERVICOAPARELHOID"},{av:"AV38OrdemServicoApareSeq",fld:"vORDEMSERVICOAPARESEQ"},{av:"AV51OSItemServicoSequencia",fld:"vOSITEMSERVICOSEQUENCIA"},{av:"AV45SdtAparelhoProfissional",fld:"vSDTAPARELHOPROFISSIONAL",grid:25},{av:"AV55PROSERVICO",fld:"vPROSERVICO"},{av:"AV50ServicoCodigo",fld:"vSERVICOCODIGO"},{av:"AV49ServicoDescricao",fld:"vSERVICODESCRICAO"},{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"}],[{av:"AV45SdtAparelhoProfissional",fld:"vSDTAPARELHOPROFISSIONAL",grid:25},{av:"AV51OSItemServicoSequencia",fld:"vOSITEMSERVICOSEQUENCIA"},{av:"AV38OrdemServicoApareSeq",fld:"vORDEMSERVICOAPARESEQ"},{av:"AV33OrdemServicoAparelhoId",fld:"vORDEMSERVICOAPARELHOID"},{av:"AV40AparelhoEmpresaId",fld:"vAPARELHOEMPRESAID"},{av:"AV32OrdemServicoId",fld:"vORDEMSERVICOID"},{av:"AV39OrdemServicoEmpresaId",fld:"vORDEMSERVICOEMPRESAID"},{av:"AV53isOK",fld:"vISOK"},{av:"AV16i",fld:"vI"},{av:"AV65GXV2",fld:"vGXV2"},{av:"AV46SdtAparelhoProfissionalItem",fld:"vSDTAPARELHOPROFISSIONALITEM"}]];this.EvtParms["CTLPROFISSIONALSEL.CLICK"]=[[{av:"AV55PROSERVICO",fld:"vPROSERVICO"},{av:"AV45SdtAparelhoProfissional",fld:"vSDTAPARELHOPROFISSIONAL",grid:25},{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"}],[{av:"AV16i",fld:"vI"},{av:"AV45SdtAparelhoProfissional",fld:"vSDTAPARELHOPROFISSIONAL",grid:25}]];this.setVCMap("AV39OrdemServicoEmpresaId","vORDEMSERVICOEMPRESAID",0,"char");this.setVCMap("AV40AparelhoEmpresaId","vAPARELHOEMPRESAID",0,"char");this.setVCMap("AV33OrdemServicoAparelhoId","vORDEMSERVICOAPARELHOID",0,"int");this.setVCMap("AV38OrdemServicoApareSeq","vORDEMSERVICOAPARESEQ",0,"int");this.setVCMap("AV51OSItemServicoSequencia","vOSITEMSERVICOSEQUENCIA",0,"int");this.setVCMap("AV44Modo","vMODO",0,"char");this.addGridBCProperty("Sdtaparelhoprofissional",["Profissionalid"],this.GXValidFnc[26],"AV45SdtAparelhoProfissional");this.addGridBCProperty("Sdtaparelhoprofissional",["Profissionalnome"],this.GXValidFnc[27],"AV45SdtAparelhoProfissional");this.addGridBCProperty("Sdtaparelhoprofissional",["ProfissionalSel"],this.GXValidFnc[28],"AV45SdtAparelhoProfissional");this.InitStandaloneVars()});gx.setParentObj(new hlistaprofissionaisservico)