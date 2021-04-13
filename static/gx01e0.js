/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:25:23.20
*/
gx.evt.autoSkip = false;
gx.define('gx01e0', false, function () {
   this.ServerClass =  "gx01e0" ;
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
      this.AV13pEmpresaPessoasEmpresaId=gx.fn.getControlValue("vPEMPRESAPESSOASEMPRESAID") ;
      this.AV14pPessoaId=gx.fn.getIntegerValue("vPPESSOAID",'.') ;
   };
   this.e131in2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141in1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx01e0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(227,53,"EMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],227,"EmpresaPessoasEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(69,54,"PESSOAID","Código do Titular","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(71,55,"PESSOAFANTASIA","Nome Cliente/Fornecedor","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(422,56,"PESSOATELEFONECONTATO","Telefone Contato","","PessoaTelefoneContato","svchar",0,"px",15,15,"left",null,[],422,"PessoaTelefoneContato",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(424,57,"PESSOANUMEROEND","Número","","PessoaNumeroEnd","int",0,"px",7,7,"right",null,[],424,"PessoaNumeroEnd",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(429,58,"PESSOARAMAL","Ramal","","PessoaRamal","svchar",0,"px",5,5,"left",null,[],429,"PessoaRamal",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKEMPRESAPESSOASEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESAPESSOASEMPRESAID",gxz:"ZV6cEmpresaPessoasEmpresaId",gxold:"OV6cEmpresaPessoasEmpresaId",gxvar:"AV6cEmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESAPESSOASEMPRESAID",gx.O.AV6cEmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV6cEmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPESSOAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOAID",gxz:"ZV7cPessoaId",gxold:"OV7cPessoaId",gxvar:"AV7cPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPESSOAID",gx.O.AV7cPessoaId,0)},c2v:function(){gx.O.AV7cPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPESSOAFANTASIA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOAFANTASIA",gxz:"ZV8cPessoaFantasia",gxold:"OV8cPessoaFantasia",gxvar:"AV8cPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cPessoaFantasia=Value},v2z:function(Value){gx.O.ZV8cPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vCPESSOAFANTASIA",gx.O.AV8cPessoaFantasia,0)},c2v:function(){gx.O.AV8cPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vCPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPESSOACONTATO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOACONTATO",gxz:"ZV9cPessoaContato",gxold:"OV9cPessoaContato",gxvar:"AV9cPessoaContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cPessoaContato=Value},v2z:function(Value){gx.O.ZV9cPessoaContato=Value},v2c:function(){gx.fn.setControlValue("vCPESSOACONTATO",gx.O.AV9cPessoaContato,0)},c2v:function(){gx.O.AV9cPessoaContato=this.val()},val:function(){return gx.fn.getControlValue("vCPESSOACONTATO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPESSOATELEFONECONTATO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOATELEFONECONTATO",gxz:"ZV10cPessoaTelefoneContato",gxold:"OV10cPessoaTelefoneContato",gxvar:"AV10cPessoaTelefoneContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cPessoaTelefoneContato=Value},v2z:function(Value){gx.O.ZV10cPessoaTelefoneContato=Value},v2c:function(){gx.fn.setControlValue("vCPESSOATELEFONECONTATO",gx.O.AV10cPessoaTelefoneContato,0)},c2v:function(){gx.O.AV10cPessoaTelefoneContato=this.val()},val:function(){return gx.fn.getControlValue("vCPESSOATELEFONECONTATO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPESSOAENDERECO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOAENDERECO",gxz:"ZV11cPessoaEndereco",gxold:"OV11cPessoaEndereco",gxvar:"AV11cPessoaEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cPessoaEndereco=Value},v2z:function(Value){gx.O.ZV11cPessoaEndereco=Value},v2c:function(){gx.fn.setControlValue("vCPESSOAENDERECO",gx.O.AV11cPessoaEndereco,0)},c2v:function(){gx.O.AV11cPessoaEndereco=this.val()},val:function(){return gx.fn.getControlValue("vCPESSOAENDERECO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKPESSOANUMEROEND", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOANUMEROEND",gxz:"ZV12cPessoaNumeroEnd",gxold:"OV12cPessoaNumeroEnd",gxvar:"AV12cPessoaNumeroEnd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cPessoaNumeroEnd=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cPessoaNumeroEnd=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPESSOANUMEROEND",gx.O.AV12cPessoaNumeroEnd,0)},c2v:function(){gx.O.AV12cPessoaNumeroEnd=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPESSOANUMEROEND",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(51),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(51),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOATELEFONECONTATO",gxz:"Z422PessoaTelefoneContato",gxold:"O422PessoaTelefoneContato",gxvar:"A422PessoaTelefoneContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A422PessoaTelefoneContato=Value},v2z:function(Value){gx.O.Z422PessoaTelefoneContato=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOATELEFONECONTATO",row || gx.fn.currentGridRowImpl(51),gx.O.A422PessoaTelefoneContato,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A422PessoaTelefoneContato=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOATELEFONECONTATO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOANUMEROEND",gxz:"Z424PessoaNumeroEnd",gxold:"O424PessoaNumeroEnd",gxvar:"A424PessoaNumeroEnd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A424PessoaNumeroEnd=gx.num.intval(Value)},v2z:function(Value){gx.O.Z424PessoaNumeroEnd=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOANUMEROEND",row || gx.fn.currentGridRowImpl(51),gx.O.A424PessoaNumeroEnd,0)},c2v:function(){gx.O.A424PessoaNumeroEnd=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOANUMEROEND",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:5,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOARAMAL",gxz:"Z429PessoaRamal",gxold:"O429PessoaRamal",gxvar:"A429PessoaRamal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A429PessoaRamal=Value},v2z:function(Value){gx.O.Z429PessoaRamal=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOARAMAL",row || gx.fn.currentGridRowImpl(51),gx.O.A429PessoaRamal,0)},c2v:function(){gx.O.A429PessoaRamal=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOARAMAL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cEmpresaPessoasEmpresaId = "" ;
   this.ZV6cEmpresaPessoasEmpresaId = "" ;
   this.OV6cEmpresaPessoasEmpresaId = "" ;
   this.AV7cPessoaId = 0 ;
   this.ZV7cPessoaId = 0 ;
   this.OV7cPessoaId = 0 ;
   this.AV8cPessoaFantasia = "" ;
   this.ZV8cPessoaFantasia = "" ;
   this.OV8cPessoaFantasia = "" ;
   this.AV9cPessoaContato = "" ;
   this.ZV9cPessoaContato = "" ;
   this.OV9cPessoaContato = "" ;
   this.AV10cPessoaTelefoneContato = "" ;
   this.ZV10cPessoaTelefoneContato = "" ;
   this.OV10cPessoaTelefoneContato = "" ;
   this.AV11cPessoaEndereco = "" ;
   this.ZV11cPessoaEndereco = "" ;
   this.OV11cPessoaEndereco = "" ;
   this.AV12cPessoaNumeroEnd = 0 ;
   this.ZV12cPessoaNumeroEnd = 0 ;
   this.OV12cPessoaNumeroEnd = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.Z422PessoaTelefoneContato = "" ;
   this.O422PessoaTelefoneContato = "" ;
   this.Z424PessoaNumeroEnd = 0 ;
   this.O424PessoaNumeroEnd = 0 ;
   this.Z429PessoaRamal = "" ;
   this.O429PessoaRamal = "" ;
   this.AV6cEmpresaPessoasEmpresaId = "" ;
   this.AV7cPessoaId = 0 ;
   this.AV8cPessoaFantasia = "" ;
   this.AV9cPessoaContato = "" ;
   this.AV10cPessoaTelefoneContato = "" ;
   this.AV11cPessoaEndereco = "" ;
   this.AV12cPessoaNumeroEnd = 0 ;
   this.AV13pEmpresaPessoasEmpresaId = "" ;
   this.AV14pPessoaId = 0 ;
   this.A423PessoaEndereco = "" ;
   this.A421PessoaContato = "" ;
   this.AV5LinkSelection = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A422PessoaTelefoneContato = "" ;
   this.A424PessoaNumeroEnd = 0 ;
   this.A429PessoaRamal = "" ;
   this.Events = {"e131in2_client": ["ENTER", true] ,"e141in1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cPessoaFantasia',fld:'vCPESSOAFANTASIA'},{av:'AV9cPessoaContato',fld:'vCPESSOACONTATO'},{av:'AV10cPessoaTelefoneContato',fld:'vCPESSOATELEFONECONTATO'},{av:'AV11cPessoaEndereco',fld:'vCPESSOAENDERECO'},{av:'AV12cPessoaNumeroEnd',fld:'vCPESSOANUMEROEND'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'}],[{av:'AV13pEmpresaPessoasEmpresaId',fld:'vPEMPRESAPESSOASEMPRESAID'},{av:'AV14pPessoaId',fld:'vPPESSOAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cPessoaFantasia',fld:'vCPESSOAFANTASIA'},{av:'AV9cPessoaContato',fld:'vCPESSOACONTATO'},{av:'AV10cPessoaTelefoneContato',fld:'vCPESSOATELEFONECONTATO'},{av:'AV11cPessoaEndereco',fld:'vCPESSOAENDERECO'},{av:'AV12cPessoaNumeroEnd',fld:'vCPESSOANUMEROEND'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cPessoaFantasia',fld:'vCPESSOAFANTASIA'},{av:'AV9cPessoaContato',fld:'vCPESSOACONTATO'},{av:'AV10cPessoaTelefoneContato',fld:'vCPESSOATELEFONECONTATO'},{av:'AV11cPessoaEndereco',fld:'vCPESSOAENDERECO'},{av:'AV12cPessoaNumeroEnd',fld:'vCPESSOANUMEROEND'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cPessoaFantasia',fld:'vCPESSOAFANTASIA'},{av:'AV9cPessoaContato',fld:'vCPESSOACONTATO'},{av:'AV10cPessoaTelefoneContato',fld:'vCPESSOATELEFONECONTATO'},{av:'AV11cPessoaEndereco',fld:'vCPESSOAENDERECO'},{av:'AV12cPessoaNumeroEnd',fld:'vCPESSOANUMEROEND'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV7cPessoaId',fld:'vCPESSOAID'},{av:'AV8cPessoaFantasia',fld:'vCPESSOAFANTASIA'},{av:'AV9cPessoaContato',fld:'vCPESSOACONTATO'},{av:'AV10cPessoaTelefoneContato',fld:'vCPESSOATELEFONECONTATO'},{av:'AV11cPessoaEndereco',fld:'vCPESSOAENDERECO'},{av:'AV12cPessoaNumeroEnd',fld:'vCPESSOANUMEROEND'}],[]];
   this.setVCMap("AV13pEmpresaPessoasEmpresaId", "vPEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV14pPessoaId", "vPPESSOAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx01e0());
