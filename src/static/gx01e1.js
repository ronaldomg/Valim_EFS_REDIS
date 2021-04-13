/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:24:46.64
*/
gx.evt.autoSkip = false;
gx.define('gx01e1', false, function () {
   this.ServerClass =  "gx01e1" ;
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
      this.AV12pEmpresaPessoasEmpresaId=gx.fn.getControlValue("vPEMPRESAPESSOASEMPRESAID") ;
      this.AV13pPessoaId=gx.fn.getIntegerValue("vPPESSOAID",'.') ;
   };
   this.e131i72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141i71_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,54];
   this.GXLastCtrlId =54;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx01e1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(69,48,"PESSOAID","Código do Titular","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(70,49,"PESSOARAZAOSOCIAL","Razão Social Cliente/Fornecedor","Selecionar","PessoaRazaoSocial","svchar",0,"px",100,80,"left",null,[],70,"PessoaRazaoSocial",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(424,50,"PESSOANUMEROEND","Número","","PessoaNumeroEnd","int",0,"px",7,7,"right",null,[],424,"PessoaNumeroEnd",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(227,51,"EMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],227,"EmpresaPessoasEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPESSOAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOAID",gxz:"ZV6cPessoaId",gxold:"OV6cPessoaId",gxvar:"AV6cPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPESSOAID",gx.O.AV6cPessoaId,0)},c2v:function(){gx.O.AV6cPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPESSOAFANTASIA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOAFANTASIA",gxz:"ZV7cPessoaFantasia",gxold:"OV7cPessoaFantasia",gxvar:"AV7cPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cPessoaFantasia=Value},v2z:function(Value){gx.O.ZV7cPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vCPESSOAFANTASIA",gx.O.AV7cPessoaFantasia,0)},c2v:function(){gx.O.AV7cPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPESSOACONTATO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOACONTATO",gxz:"ZV8cPessoaContato",gxold:"OV8cPessoaContato",gxvar:"AV8cPessoaContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cPessoaContato=Value},v2z:function(Value){gx.O.ZV8cPessoaContato=Value},v2c:function(){gx.fn.setControlValue("vCPESSOACONTATO",gx.O.AV8cPessoaContato,0)},c2v:function(){gx.O.AV8cPessoaContato=this.val()},val:function(){return gx.fn.getControlValue("vCPESSOACONTATO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPESSOATELEFONECONTATO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOATELEFONECONTATO",gxz:"ZV9cPessoaTelefoneContato",gxold:"OV9cPessoaTelefoneContato",gxvar:"AV9cPessoaTelefoneContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cPessoaTelefoneContato=Value},v2z:function(Value){gx.O.ZV9cPessoaTelefoneContato=Value},v2c:function(){gx.fn.setControlValue("vCPESSOATELEFONECONTATO",gx.O.AV9cPessoaTelefoneContato,0)},c2v:function(){gx.O.AV9cPessoaTelefoneContato=this.val()},val:function(){return gx.fn.getControlValue("vCPESSOATELEFONECONTATO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPESSOAENDERECO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOAENDERECO",gxz:"ZV10cPessoaEndereco",gxold:"OV10cPessoaEndereco",gxvar:"AV10cPessoaEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cPessoaEndereco=Value},v2z:function(Value){gx.O.ZV10cPessoaEndereco=Value},v2c:function(){gx.fn.setControlValue("vCPESSOAENDERECO",gx.O.AV10cPessoaEndereco,0)},c2v:function(){gx.O.AV10cPessoaEndereco=this.val()},val:function(){return gx.fn.getControlValue("vCPESSOAENDERECO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPESSOANUMEROEND", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOANUMEROEND",gxz:"ZV11cPessoaNumeroEnd",gxold:"OV11cPessoaNumeroEnd",gxvar:"AV11cPessoaNumeroEnd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cPessoaNumeroEnd=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cPessoaNumeroEnd=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPESSOANUMEROEND",gx.O.AV11cPessoaNumeroEnd,0)},c2v:function(){gx.O.AV11cPessoaNumeroEnd=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPESSOANUMEROEND",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(46),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOARAZAOSOCIAL",gxz:"Z70PessoaRazaoSocial",gxold:"O70PessoaRazaoSocial",gxvar:"A70PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A70PessoaRazaoSocial=Value},v2z:function(Value){gx.O.Z70PessoaRazaoSocial=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(46),gx.O.A70PessoaRazaoSocial,0)},c2v:function(){gx.O.A70PessoaRazaoSocial=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOANUMEROEND",gxz:"Z424PessoaNumeroEnd",gxold:"O424PessoaNumeroEnd",gxvar:"A424PessoaNumeroEnd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A424PessoaNumeroEnd=gx.num.intval(Value)},v2z:function(Value){gx.O.Z424PessoaNumeroEnd=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOANUMEROEND",row || gx.fn.currentGridRowImpl(46),gx.O.A424PessoaNumeroEnd,0)},c2v:function(){gx.O.A424PessoaNumeroEnd=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOANUMEROEND",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLE4",grid:0};
   this.AV6cPessoaId = 0 ;
   this.ZV6cPessoaId = 0 ;
   this.OV6cPessoaId = 0 ;
   this.AV7cPessoaFantasia = "" ;
   this.ZV7cPessoaFantasia = "" ;
   this.OV7cPessoaFantasia = "" ;
   this.AV8cPessoaContato = "" ;
   this.ZV8cPessoaContato = "" ;
   this.OV8cPessoaContato = "" ;
   this.AV9cPessoaTelefoneContato = "" ;
   this.ZV9cPessoaTelefoneContato = "" ;
   this.OV9cPessoaTelefoneContato = "" ;
   this.AV10cPessoaEndereco = "" ;
   this.ZV10cPessoaEndereco = "" ;
   this.OV10cPessoaEndereco = "" ;
   this.AV11cPessoaNumeroEnd = 0 ;
   this.ZV11cPessoaNumeroEnd = 0 ;
   this.OV11cPessoaNumeroEnd = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z70PessoaRazaoSocial = "" ;
   this.O70PessoaRazaoSocial = "" ;
   this.Z424PessoaNumeroEnd = 0 ;
   this.O424PessoaNumeroEnd = 0 ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.AV6cPessoaId = 0 ;
   this.AV7cPessoaFantasia = "" ;
   this.AV8cPessoaContato = "" ;
   this.AV9cPessoaTelefoneContato = "" ;
   this.AV10cPessoaEndereco = "" ;
   this.AV11cPessoaNumeroEnd = 0 ;
   this.AV12pEmpresaPessoasEmpresaId = "" ;
   this.AV13pPessoaId = 0 ;
   this.A423PessoaEndereco = "" ;
   this.A422PessoaTelefoneContato = "" ;
   this.A421PessoaContato = "" ;
   this.A71PessoaFantasia = "" ;
   this.AV5LinkSelection = "" ;
   this.A69PessoaId = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.A424PessoaNumeroEnd = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.Events = {"e131i72_client": ["ENTER", true] ,"e141i71_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPessoaId',fld:'vCPESSOAID'},{av:'AV7cPessoaFantasia',fld:'vCPESSOAFANTASIA'},{av:'AV8cPessoaContato',fld:'vCPESSOACONTATO'},{av:'AV9cPessoaTelefoneContato',fld:'vCPESSOATELEFONECONTATO'},{av:'AV10cPessoaEndereco',fld:'vCPESSOAENDERECO'},{av:'AV11cPessoaNumeroEnd',fld:'vCPESSOANUMEROEND'},{av:'AV12pEmpresaPessoasEmpresaId',fld:'vPEMPRESAPESSOASEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV13pPessoaId',fld:'vPPESSOAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPessoaId',fld:'vCPESSOAID'},{av:'AV7cPessoaFantasia',fld:'vCPESSOAFANTASIA'},{av:'AV8cPessoaContato',fld:'vCPESSOACONTATO'},{av:'AV9cPessoaTelefoneContato',fld:'vCPESSOATELEFONECONTATO'},{av:'AV10cPessoaEndereco',fld:'vCPESSOAENDERECO'},{av:'AV11cPessoaNumeroEnd',fld:'vCPESSOANUMEROEND'},{av:'AV12pEmpresaPessoasEmpresaId',fld:'vPEMPRESAPESSOASEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPessoaId',fld:'vCPESSOAID'},{av:'AV7cPessoaFantasia',fld:'vCPESSOAFANTASIA'},{av:'AV8cPessoaContato',fld:'vCPESSOACONTATO'},{av:'AV9cPessoaTelefoneContato',fld:'vCPESSOATELEFONECONTATO'},{av:'AV10cPessoaEndereco',fld:'vCPESSOAENDERECO'},{av:'AV11cPessoaNumeroEnd',fld:'vCPESSOANUMEROEND'},{av:'AV12pEmpresaPessoasEmpresaId',fld:'vPEMPRESAPESSOASEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPessoaId',fld:'vCPESSOAID'},{av:'AV7cPessoaFantasia',fld:'vCPESSOAFANTASIA'},{av:'AV8cPessoaContato',fld:'vCPESSOACONTATO'},{av:'AV9cPessoaTelefoneContato',fld:'vCPESSOATELEFONECONTATO'},{av:'AV10cPessoaEndereco',fld:'vCPESSOAENDERECO'},{av:'AV11cPessoaNumeroEnd',fld:'vCPESSOANUMEROEND'},{av:'AV12pEmpresaPessoasEmpresaId',fld:'vPEMPRESAPESSOASEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPessoaId',fld:'vCPESSOAID'},{av:'AV7cPessoaFantasia',fld:'vCPESSOAFANTASIA'},{av:'AV8cPessoaContato',fld:'vCPESSOACONTATO'},{av:'AV9cPessoaTelefoneContato',fld:'vCPESSOATELEFONECONTATO'},{av:'AV10cPessoaEndereco',fld:'vCPESSOAENDERECO'},{av:'AV11cPessoaNumeroEnd',fld:'vCPESSOANUMEROEND'},{av:'AV12pEmpresaPessoasEmpresaId',fld:'vPEMPRESAPESSOASEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pEmpresaPessoasEmpresaId", "vPEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV13pPessoaId", "vPPESSOAID", 0, "int");
   this.setVCMap("AV12pEmpresaPessoasEmpresaId", "vPEMPRESAPESSOASEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pEmpresaPessoasEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx01e1());