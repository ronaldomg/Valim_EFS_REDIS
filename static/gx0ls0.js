/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:46:22.11
*/
gx.evt.autoSkip = false;
gx.define('gx0ls0', false, function () {
   this.ServerClass =  "gx0ls0" ;
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
      this.AV13pSolicitacaoEmpresaId=gx.fn.getControlValue("vPSOLICITACAOEMPRESAID") ;
      this.AV14pSolicitacaoNumero=gx.fn.getIntegerValue("vPSOLICITACAONUMERO",'.') ;
      this.AV15pSolicitacaoFornecedorSeq=gx.fn.getIntegerValue("vPSOLICITACAOFORNECEDORSEQ",'.') ;
   };
   this.e1327u2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1427u1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ls0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(3370,53,"SOLICITACAOEMPRESAID","Empresa","","SolicitacaoEmpresaId","char",0,"px",10,10,"left",null,[],3370,"SolicitacaoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3371,54,"SOLICITACAONUMERO","Número","","SolicitacaoNumero","int",0,"px",7,7,"right",null,[],3371,"SolicitacaoNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10567,55,"SOLICITACAOFORNECEDORSEQ","Fornecedor Seq","","SolicitacaoFornecedorSeq","int",0,"px",7,7,"right",null,[],10567,"SolicitacaoFornecedorSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(227,56,"EMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],227,"EmpresaPessoasEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(69,57,"PESSOAID","Código do Titular","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10565,58,"SOLICITACAOFORNECEDORDTHREMAIL","Hr Email","Selecionar","SolicitacaoFornecedorDtHrEmail","dtime",0,"px",16,16,"right",null,[],10565,"SolicitacaoFornecedorDtHrEmail",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSOLICITACAOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSOLICITACAOEMPRESAID",gxz:"ZV6cSolicitacaoEmpresaId",gxold:"OV6cSolicitacaoEmpresaId",gxvar:"AV6cSolicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSolicitacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cSolicitacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCSOLICITACAOEMPRESAID",gx.O.AV6cSolicitacaoEmpresaId,0)},c2v:function(){gx.O.AV6cSolicitacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCSOLICITACAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSOLICITACAONUMERO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSOLICITACAONUMERO",gxz:"ZV7cSolicitacaoNumero",gxold:"OV7cSolicitacaoNumero",gxvar:"AV7cSolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cSolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSOLICITACAONUMERO",gx.O.AV7cSolicitacaoNumero,0)},c2v:function(){gx.O.AV7cSolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSOLICITACAOFORNECEDORSEQ", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSOLICITACAOFORNECEDORSEQ",gxz:"ZV8cSolicitacaoFornecedorSeq",gxold:"OV8cSolicitacaoFornecedorSeq",gxvar:"AV8cSolicitacaoFornecedorSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSolicitacaoFornecedorSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cSolicitacaoFornecedorSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSOLICITACAOFORNECEDORSEQ",gx.O.AV8cSolicitacaoFornecedorSeq,0)},c2v:function(){gx.O.AV8cSolicitacaoFornecedorSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSOLICITACAOFORNECEDORSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKEMPRESAPESSOASEMPRESAID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESAPESSOASEMPRESAID",gxz:"ZV9cEmpresaPessoasEmpresaId",gxold:"OV9cEmpresaPessoasEmpresaId",gxvar:"AV9cEmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cEmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV9cEmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESAPESSOASEMPRESAID",gx.O.AV9cEmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV9cEmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPESSOAID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPESSOAID",gxz:"ZV10cPessoaId",gxold:"OV10cPessoaId",gxvar:"AV10cPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPESSOAID",gx.O.AV10cPessoaId,0)},c2v:function(){gx.O.AV10cPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKSOLICITACAOFORNECEDORDTHREMAIL", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSOLICITACAOFORNECEDORDTHREMAIL",gxz:"ZV11cSolicitacaoFornecedorDtHrEmail",gxold:"OV11cSolicitacaoFornecedorDtHrEmail",gxvar:"AV11cSolicitacaoFornecedorDtHrEmail",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cSolicitacaoFornecedorDtHrEmail=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cSolicitacaoFornecedorDtHrEmail=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCSOLICITACAOFORNECEDORDTHREMAIL",gx.O.AV11cSolicitacaoFornecedorDtHrEmail,0)},c2v:function(){gx.O.AV11cSolicitacaoFornecedorDtHrEmail=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCSOLICITACAOFORNECEDORDTHREMAIL")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKSOLICITACAOFORNECEDORDTHRFINALIZACAO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSOLICITACAOFORNECEDORDTHRFINALIZACAO",gxz:"ZV12cSolicitacaoFornecedorDtHrFinalizacao",gxold:"OV12cSolicitacaoFornecedorDtHrFinalizacao",gxvar:"AV12cSolicitacaoFornecedorDtHrFinalizacao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cSolicitacaoFornecedorDtHrFinalizacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12cSolicitacaoFornecedorDtHrFinalizacao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCSOLICITACAOFORNECEDORDTHRFINALIZACAO",gx.O.AV12cSolicitacaoFornecedorDtHrFinalizacao,0)},c2v:function(){gx.O.AV12cSolicitacaoFornecedorDtHrFinalizacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCSOLICITACAOFORNECEDORDTHRFINALIZACAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOEMPRESAID",gxz:"Z3370SolicitacaoEmpresaId",gxold:"O3370SolicitacaoEmpresaId",gxvar:"A3370SolicitacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3370SolicitacaoEmpresaId=Value},v2z:function(Value){gx.O.Z3370SolicitacaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITACAOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A3370SolicitacaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3370SolicitacaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITACAOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAONUMERO",gxz:"Z3371SolicitacaoNumero",gxold:"O3371SolicitacaoNumero",gxvar:"A3371SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3371SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3371SolicitacaoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITACAONUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A3371SolicitacaoNumero,0)},c2v:function(){gx.O.A3371SolicitacaoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SOLICITACAONUMERO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOFORNECEDORSEQ",gxz:"Z10567SolicitacaoFornecedorSeq",gxold:"O10567SolicitacaoFornecedorSeq",gxvar:"A10567SolicitacaoFornecedorSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10567SolicitacaoFornecedorSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10567SolicitacaoFornecedorSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITACAOFORNECEDORSEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A10567SolicitacaoFornecedorSeq,0)},c2v:function(){gx.O.A10567SolicitacaoFornecedorSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SOLICITACAOFORNECEDORSEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(51),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITACAOFORNECEDORDTHREMAIL",gxz:"Z10565SolicitacaoFornecedorDtHrEmail",gxold:"O10565SolicitacaoFornecedorDtHrEmail",gxvar:"A10565SolicitacaoFornecedorDtHrEmail",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10565SolicitacaoFornecedorDtHrEmail=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10565SolicitacaoFornecedorDtHrEmail=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITACAOFORNECEDORDTHREMAIL",row || gx.fn.currentGridRowImpl(51),gx.O.A10565SolicitacaoFornecedorDtHrEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10565SolicitacaoFornecedorDtHrEmail=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SOLICITACAOFORNECEDORDTHREMAIL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cSolicitacaoEmpresaId = "" ;
   this.ZV6cSolicitacaoEmpresaId = "" ;
   this.OV6cSolicitacaoEmpresaId = "" ;
   this.AV7cSolicitacaoNumero = 0 ;
   this.ZV7cSolicitacaoNumero = 0 ;
   this.OV7cSolicitacaoNumero = 0 ;
   this.AV8cSolicitacaoFornecedorSeq = 0 ;
   this.ZV8cSolicitacaoFornecedorSeq = 0 ;
   this.OV8cSolicitacaoFornecedorSeq = 0 ;
   this.AV9cEmpresaPessoasEmpresaId = "" ;
   this.ZV9cEmpresaPessoasEmpresaId = "" ;
   this.OV9cEmpresaPessoasEmpresaId = "" ;
   this.AV10cPessoaId = 0 ;
   this.ZV10cPessoaId = 0 ;
   this.OV10cPessoaId = 0 ;
   this.AV11cSolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.ZV11cSolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.OV11cSolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.AV12cSolicitacaoFornecedorDtHrFinalizacao = gx.date.nullDate() ;
   this.ZV12cSolicitacaoFornecedorDtHrFinalizacao = gx.date.nullDate() ;
   this.OV12cSolicitacaoFornecedorDtHrFinalizacao = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z3370SolicitacaoEmpresaId = "" ;
   this.O3370SolicitacaoEmpresaId = "" ;
   this.Z3371SolicitacaoNumero = 0 ;
   this.O3371SolicitacaoNumero = 0 ;
   this.Z10567SolicitacaoFornecedorSeq = 0 ;
   this.O10567SolicitacaoFornecedorSeq = 0 ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z10565SolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.O10565SolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.AV6cSolicitacaoEmpresaId = "" ;
   this.AV7cSolicitacaoNumero = 0 ;
   this.AV8cSolicitacaoFornecedorSeq = 0 ;
   this.AV9cEmpresaPessoasEmpresaId = "" ;
   this.AV10cPessoaId = 0 ;
   this.AV11cSolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.AV12cSolicitacaoFornecedorDtHrFinalizacao = gx.date.nullDate() ;
   this.AV13pSolicitacaoEmpresaId = "" ;
   this.AV14pSolicitacaoNumero = 0 ;
   this.AV15pSolicitacaoFornecedorSeq = 0 ;
   this.A10566SolicitacaoFornecedorDtHrFinal = gx.date.nullDate() ;
   this.AV5LinkSelection = "" ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A10567SolicitacaoFornecedorSeq = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A10565SolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.Events = {"e1327u2_client": ["ENTER", true] ,"e1427u1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSolicitacaoEmpresaId',fld:'vCSOLICITACAOEMPRESAID'},{av:'AV7cSolicitacaoNumero',fld:'vCSOLICITACAONUMERO'},{av:'AV8cSolicitacaoFornecedorSeq',fld:'vCSOLICITACAOFORNECEDORSEQ'},{av:'AV9cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV10cPessoaId',fld:'vCPESSOAID'},{av:'AV11cSolicitacaoFornecedorDtHrEmail',fld:'vCSOLICITACAOFORNECEDORDTHREMAIL'},{av:'AV12cSolicitacaoFornecedorDtHrFinalizacao',fld:'vCSOLICITACAOFORNECEDORDTHRFINALIZACAO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A10567SolicitacaoFornecedorSeq',fld:'SOLICITACAOFORNECEDORSEQ'}],[{av:'AV13pSolicitacaoEmpresaId',fld:'vPSOLICITACAOEMPRESAID'},{av:'AV14pSolicitacaoNumero',fld:'vPSOLICITACAONUMERO'},{av:'AV15pSolicitacaoFornecedorSeq',fld:'vPSOLICITACAOFORNECEDORSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSolicitacaoEmpresaId',fld:'vCSOLICITACAOEMPRESAID'},{av:'AV7cSolicitacaoNumero',fld:'vCSOLICITACAONUMERO'},{av:'AV8cSolicitacaoFornecedorSeq',fld:'vCSOLICITACAOFORNECEDORSEQ'},{av:'AV9cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV10cPessoaId',fld:'vCPESSOAID'},{av:'AV11cSolicitacaoFornecedorDtHrEmail',fld:'vCSOLICITACAOFORNECEDORDTHREMAIL'},{av:'AV12cSolicitacaoFornecedorDtHrFinalizacao',fld:'vCSOLICITACAOFORNECEDORDTHRFINALIZACAO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSolicitacaoEmpresaId',fld:'vCSOLICITACAOEMPRESAID'},{av:'AV7cSolicitacaoNumero',fld:'vCSOLICITACAONUMERO'},{av:'AV8cSolicitacaoFornecedorSeq',fld:'vCSOLICITACAOFORNECEDORSEQ'},{av:'AV9cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV10cPessoaId',fld:'vCPESSOAID'},{av:'AV11cSolicitacaoFornecedorDtHrEmail',fld:'vCSOLICITACAOFORNECEDORDTHREMAIL'},{av:'AV12cSolicitacaoFornecedorDtHrFinalizacao',fld:'vCSOLICITACAOFORNECEDORDTHRFINALIZACAO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSolicitacaoEmpresaId',fld:'vCSOLICITACAOEMPRESAID'},{av:'AV7cSolicitacaoNumero',fld:'vCSOLICITACAONUMERO'},{av:'AV8cSolicitacaoFornecedorSeq',fld:'vCSOLICITACAOFORNECEDORSEQ'},{av:'AV9cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV10cPessoaId',fld:'vCPESSOAID'},{av:'AV11cSolicitacaoFornecedorDtHrEmail',fld:'vCSOLICITACAOFORNECEDORDTHREMAIL'},{av:'AV12cSolicitacaoFornecedorDtHrFinalizacao',fld:'vCSOLICITACAOFORNECEDORDTHRFINALIZACAO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSolicitacaoEmpresaId',fld:'vCSOLICITACAOEMPRESAID'},{av:'AV7cSolicitacaoNumero',fld:'vCSOLICITACAONUMERO'},{av:'AV8cSolicitacaoFornecedorSeq',fld:'vCSOLICITACAOFORNECEDORSEQ'},{av:'AV9cEmpresaPessoasEmpresaId',fld:'vCEMPRESAPESSOASEMPRESAID'},{av:'AV10cPessoaId',fld:'vCPESSOAID'},{av:'AV11cSolicitacaoFornecedorDtHrEmail',fld:'vCSOLICITACAOFORNECEDORDTHREMAIL'},{av:'AV12cSolicitacaoFornecedorDtHrFinalizacao',fld:'vCSOLICITACAOFORNECEDORDTHRFINALIZACAO'}],[]];
   this.setVCMap("AV13pSolicitacaoEmpresaId", "vPSOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV14pSolicitacaoNumero", "vPSOLICITACAONUMERO", 0, "int");
   this.setVCMap("AV15pSolicitacaoFornecedorSeq", "vPSOLICITACAOFORNECEDORSEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ls0());
