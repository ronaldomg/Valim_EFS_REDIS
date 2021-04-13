/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:45.22
*/
gx.evt.autoSkip = false;
gx.define('hsolicitacaofornecedor', false, function () {
   this.ServerClass =  "hsolicitacaofornecedor" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV10PessoaId=gx.fn.getControlValue("vPESSOAID") ;
      this.AV25ContLinhas=gx.fn.getIntegerValue("vCONTLINHAS",'.') ;
      this.A3370SolicitacaoEmpresaId=gx.fn.getControlValue("SOLICITACAOEMPRESAID") ;
      this.AV8EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.A3371SolicitacaoNumero=gx.fn.getIntegerValue("SOLICITACAONUMERO",'.') ;
      this.A10567SolicitacaoFornecedorSeq=gx.fn.getIntegerValue("SOLICITACAOFORNECEDORSEQ",'.') ;
      this.A10565SolicitacaoFornecedorDtHrEmail=gx.fn.getDateTimeValue("SOLICITACAOFORNECEDORDTHREMAIL") ;
      this.A10566SolicitacaoFornecedorDtHrFinal=gx.fn.getDateTimeValue("SOLICITACAOFORNECEDORDTHRFINAL") ;
   };
   this.Validv_Solicitacaonumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSOLICITACAONUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e1727p2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e1327p2_client=function()
   {
      this.executeServerEvent("'PRIMEIRA'", true, null, false, false);
   };
   this.e1127p2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1227p2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1427p2_client=function()
   {
      this.executeServerEvent("'ULTIMA'", true, null, false, false);
   };
   this.e1927p2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2027p1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,14,17,19,21,23,26,28,30,32,38,39,40,41,42,43,44,45,46,49,52,54,56,58,65,66];
   this.GXLastCtrlId =66;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",37,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsolicitacaofornecedor",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(69,38,"PESSOAID","Código","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(71,39,"PESSOAFANTASIA","Fantasia","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(472,40,"PESSOACNPJ","CNPJ","","PessoaCNPJ","char",0,"px",18,18,"left",null,[],472,"PessoaCNPJ",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(72,41,"PESSOATELEFONE","Telefone","","PessoaTelefone","svchar",0,"px",15,15,"left",null,[],72,"PessoaTelefone",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(434,42,"PESSOAEMAIL","E-mail","","PessoaEmail","svchar",0,"px",60,60,"left",null,[],434,"PessoaEmail",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Solicitacaofornecedordthremail",43,"vSOLICITACAOFORNECEDORDTHREMAIL","Data do envio do e-mail","","SolicitacaoFornecedorDtHrEmail","dtime",0,"px",16,16,"right",null,[],"Solicitacaofornecedordthremail","SolicitacaoFornecedorDtHrEmail",true,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Solicitacaofornecedordthrfinalizacao",44,"vSOLICITACAOFORNECEDORDTHRFINALIZACAO","Data finalização","","SolicitacaoFornecedorDtHrFinalizacao","dtime",0,"px",16,16,"right",null,[],"Solicitacaofornecedordthrfinalizacao","SolicitacaoFornecedorDtHrFinalizacao",true,5,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",45,0,"px",17,"px","e1727p2_client","","Exc","Image","GridColumnImage");
   GridContainer.addSingleLineEdit("Solicitacaofornecedorseq",46,"vSOLICITACAOFORNECEDORSEQ","Sequencia","","SolicitacaoFornecedorSeq","int",0,"px",7,7,"right",null,[],"Solicitacaofornecedorseq","SolicitacaoFornecedorSeq",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Solicitacaonumero,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMERO",gxz:"ZV15SolicitacaoNumero",gxold:"OV15SolicitacaoNumero",gxvar:"AV15SolicitacaoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15SolicitacaoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15SolicitacaoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMERO",gx.O.AV15SolicitacaoNumero,0)},c2v:function(){gx.O.AV15SolicitacaoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[12]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUTILIZACAODESCRICAO",gxz:"ZV19UtilizacaoDescricao",gxold:"OV19UtilizacaoDescricao",gxvar:"AV19UtilizacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19UtilizacaoDescricao=Value},v2z:function(Value){gx.O.ZV19UtilizacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vUTILIZACAODESCRICAO",gx.O.AV19UtilizacaoDescricao,0)},c2v:function(){gx.O.AV19UtilizacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vUTILIZACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAODATAINICIO",gxz:"ZV12SolicitacaoDataInicio",gxold:"OV12SolicitacaoDataInicio",gxvar:"AV12SolicitacaoDataInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12SolicitacaoDataInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12SolicitacaoDataInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAODATAINICIO",gx.O.AV12SolicitacaoDataInicio,0)},c2v:function(){gx.O.AV12SolicitacaoDataInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSOLICITACAODATAINICIO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEPARTAMENTONOME",gxz:"ZV7DepartamentoNome",gxold:"OV7DepartamentoNome",gxvar:"AV7DepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DepartamentoNome=Value},v2z:function(Value){gx.O.ZV7DepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("vDEPARTAMENTONOME",gx.O.AV7DepartamentoNome,0)},c2v:function(){gx.O.AV7DepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPARTAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAOPREVISAOCONCLUSAO",gxz:"ZV16SolicitacaoPrevisaoConclusao",gxold:"OV16SolicitacaoPrevisaoConclusao",gxvar:"AV16SolicitacaoPrevisaoConclusao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16SolicitacaoPrevisaoConclusao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV16SolicitacaoPrevisaoConclusao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAOPREVISAOCONCLUSAO",gx.O.AV16SolicitacaoPrevisaoConclusao,0)},c2v:function(){gx.O.AV16SolicitacaoPrevisaoConclusao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSOLICITACAOPREVISAOCONCLUSAO")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITANTENOME",gxz:"ZV17SolicitanteNome",gxold:"OV17SolicitanteNome",gxvar:"AV17SolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SolicitanteNome=Value},v2z:function(Value){gx.O.ZV17SolicitanteNome=Value},v2c:function(){gx.fn.setControlValue("vSOLICITANTENOME",gx.O.AV17SolicitanteNome,0)},c2v:function(){gx.O.AV17SolicitanteNome=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITANTENOME")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(37),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(37),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOACNPJ",gxz:"Z472PessoaCNPJ",gxold:"O472PessoaCNPJ",gxvar:"A472PessoaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A472PessoaCNPJ=Value},v2z:function(Value){gx.O.Z472PessoaCNPJ=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOACNPJ",row || gx.fn.currentGridRowImpl(37),gx.O.A472PessoaCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A472PessoaCNPJ=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOACNPJ",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOATELEFONE",gxz:"Z72PessoaTelefone",gxold:"O72PessoaTelefone",gxvar:"A72PessoaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A72PessoaTelefone=Value},v2z:function(Value){gx.O.Z72PessoaTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOATELEFONE",row || gx.fn.currentGridRowImpl(37),gx.O.A72PessoaTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A72PessoaTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOATELEFONE",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAEMAIL",gxz:"Z434PessoaEmail",gxold:"O434PessoaEmail",gxvar:"A434PessoaEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A434PessoaEmail=Value},v2z:function(Value){gx.O.Z434PessoaEmail=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAEMAIL",row || gx.fn.currentGridRowImpl(37),gx.O.A434PessoaEmail,0)},c2v:function(){gx.O.A434PessoaEmail=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAEMAIL",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAOFORNECEDORDTHREMAIL",gxz:"ZV13SolicitacaoFornecedorDtHrEmail",gxold:"OV13SolicitacaoFornecedorDtHrEmail",gxvar:"AV13SolicitacaoFornecedorDtHrEmail",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV13SolicitacaoFornecedorDtHrEmail=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV13SolicitacaoFornecedorDtHrEmail=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vSOLICITACAOFORNECEDORDTHREMAIL",row || gx.fn.currentGridRowImpl(37),gx.O.AV13SolicitacaoFornecedorDtHrEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV13SolicitacaoFornecedorDtHrEmail=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vSOLICITACAOFORNECEDORDTHREMAIL",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAOFORNECEDORDTHRFINALIZACAO",gxz:"ZV14SolicitacaoFornecedorDtHrFinalizacao",gxold:"OV14SolicitacaoFornecedorDtHrFinalizacao",gxvar:"AV14SolicitacaoFornecedorDtHrFinalizacao",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV14SolicitacaoFornecedorDtHrFinalizacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV14SolicitacaoFornecedorDtHrFinalizacao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vSOLICITACAOFORNECEDORDTHRFINALIZACAO",row || gx.fn.currentGridRowImpl(37),gx.O.AV14SolicitacaoFornecedorDtHrFinalizacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV14SolicitacaoFornecedorDtHrFinalizacao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vSOLICITACAOFORNECEDORDTHRFINALIZACAO",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV5bmpExc",gxold:"OV5bmpExc",gxvar:"AV5bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5bmpExc=Value},v2z:function(Value){gx.O.ZV5bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(37),gx.O.AV5bmpExc,gx.O.AV30Bmpexc_GXI)},c2v:function(){gx.O.AV30Bmpexc_GXI=this.val_GXI();gx.O.AV5bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(37))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(37))}, gxvar_GXI:'AV30Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAOFORNECEDORSEQ",gxz:"ZV21SolicitacaoFornecedorSeq",gxold:"OV21SolicitacaoFornecedorSeq",gxvar:"AV21SolicitacaoFornecedorSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21SolicitacaoFornecedorSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21SolicitacaoFornecedorSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vSOLICITACAOFORNECEDORSEQ",row || gx.fn.currentGridRowImpl(37),gx.O.AV21SolicitacaoFornecedorSeq,0)},c2v:function(){gx.O.AV21SolicitacaoFornecedorSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vSOLICITACAOFORNECEDORSEQ",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TABLE9",grid:0};
   GXValidFnc[52]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[54]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[56]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[58]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAG",gxz:"ZV23Pag",gxold:"OV23Pag",gxvar:"AV23Pag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Pag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAG",gx.O.AV23Pag,0)},c2v:function(){gx.O.AV23Pag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAG",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAG",gxz:"ZV22CtrlPag",gxold:"OV22CtrlPag",gxvar:"AV22CtrlPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22CtrlPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22CtrlPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRLPAG",gx.O.AV22CtrlPag,0)},c2v:function(){gx.O.AV22CtrlPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAG",'.')},nac:gx.falseFn};
   this.AV15SolicitacaoNumero = 0 ;
   this.ZV15SolicitacaoNumero = 0 ;
   this.OV15SolicitacaoNumero = 0 ;
   this.AV19UtilizacaoDescricao = "" ;
   this.ZV19UtilizacaoDescricao = "" ;
   this.OV19UtilizacaoDescricao = "" ;
   this.AV12SolicitacaoDataInicio = gx.date.nullDate() ;
   this.ZV12SolicitacaoDataInicio = gx.date.nullDate() ;
   this.OV12SolicitacaoDataInicio = gx.date.nullDate() ;
   this.AV7DepartamentoNome = "" ;
   this.ZV7DepartamentoNome = "" ;
   this.OV7DepartamentoNome = "" ;
   this.AV16SolicitacaoPrevisaoConclusao = gx.date.nullDate() ;
   this.ZV16SolicitacaoPrevisaoConclusao = gx.date.nullDate() ;
   this.OV16SolicitacaoPrevisaoConclusao = gx.date.nullDate() ;
   this.AV17SolicitanteNome = "" ;
   this.ZV17SolicitanteNome = "" ;
   this.OV17SolicitanteNome = "" ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.Z472PessoaCNPJ = "" ;
   this.O472PessoaCNPJ = "" ;
   this.Z72PessoaTelefone = "" ;
   this.O72PessoaTelefone = "" ;
   this.Z434PessoaEmail = "" ;
   this.O434PessoaEmail = "" ;
   this.ZV13SolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.OV13SolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.ZV14SolicitacaoFornecedorDtHrFinalizacao = gx.date.nullDate() ;
   this.OV14SolicitacaoFornecedorDtHrFinalizacao = gx.date.nullDate() ;
   this.ZV5bmpExc = "" ;
   this.OV5bmpExc = "" ;
   this.ZV21SolicitacaoFornecedorSeq = 0 ;
   this.OV21SolicitacaoFornecedorSeq = 0 ;
   this.AV23Pag = 0 ;
   this.ZV23Pag = 0 ;
   this.OV23Pag = 0 ;
   this.AV22CtrlPag = 0 ;
   this.ZV22CtrlPag = 0 ;
   this.OV22CtrlPag = 0 ;
   this.AV15SolicitacaoNumero = 0 ;
   this.AV19UtilizacaoDescricao = "" ;
   this.AV12SolicitacaoDataInicio = gx.date.nullDate() ;
   this.AV7DepartamentoNome = "" ;
   this.AV16SolicitacaoPrevisaoConclusao = gx.date.nullDate() ;
   this.AV17SolicitanteNome = "" ;
   this.AV23Pag = 0 ;
   this.AV22CtrlPag = 0 ;
   this.AV8EmpresaLogadaId = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A472PessoaCNPJ = "" ;
   this.A72PessoaTelefone = "" ;
   this.A434PessoaEmail = "" ;
   this.AV13SolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.AV14SolicitacaoFornecedorDtHrFinalizacao = gx.date.nullDate() ;
   this.AV5bmpExc = "" ;
   this.AV21SolicitacaoFornecedorSeq = 0 ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A10567SolicitacaoFornecedorSeq = 0 ;
   this.A10565SolicitacaoFornecedorDtHrEmail = gx.date.nullDate() ;
   this.A10566SolicitacaoFornecedorDtHrFinal = gx.date.nullDate() ;
   this.AV10PessoaId = [ ] ;
   this.AV25ContLinhas = 0 ;
   this.Events = {"e1727p2_client": ["'EXCLUIR'", true] ,"e1327p2_client": ["'PRIMEIRA'", true] ,"e1127p2_client": ["'ANTERIOR'", true] ,"e1227p2_client": ["'PROXIMO'", true] ,"e1427p2_client": ["'ULTIMA'", true] ,"e1927p2_client": ["ENTER", true] ,"e2027p1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10PessoaId',fld:'vPESSOAID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV15SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A10567SolicitacaoFornecedorSeq',fld:'SOLICITACAOFORNECEDORSEQ'},{av:'A10565SolicitacaoFornecedorDtHrEmail',fld:'SOLICITACAOFORNECEDORDTHREMAIL'},{av:'A10566SolicitacaoFornecedorDtHrFinal',fld:'SOLICITACAOFORNECEDORDTHRFINAL'},{av:'AV25ContLinhas',fld:'vCONTLINHAS',hsh:true},{av:'AV23Pag',fld:'vPAG'},{av:'AV22CtrlPag',fld:'vCTRLPAG'}],[{av:'AV24Res',fld:'vRES'},{av:'AV26ResInt',fld:'vRESINT'},{av:'AV23Pag',fld:'vPAG'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV22CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV15SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A10567SolicitacaoFornecedorSeq',fld:'SOLICITACAOFORNECEDORSEQ'},{av:'A10565SolicitacaoFornecedorDtHrEmail',fld:'SOLICITACAOFORNECEDORDTHREMAIL'},{av:'A10566SolicitacaoFornecedorDtHrFinal',fld:'SOLICITACAOFORNECEDORDTHRFINAL'}],[{av:'AV5bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV21SolicitacaoFornecedorSeq',fld:'vSOLICITACAOFORNECEDORSEQ'},{av:'AV13SolicitacaoFornecedorDtHrEmail',fld:'vSOLICITACAOFORNECEDORDTHREMAIL'},{av:'AV14SolicitacaoFornecedorDtHrFinalizacao',fld:'vSOLICITACAOFORNECEDORDTHRFINALIZACAO'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10PessoaId',fld:'vPESSOAID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV25ContLinhas',fld:'vCONTLINHAS',hsh:true},{av:'AV23Pag',fld:'vPAG'},{av:'AV22CtrlPag',fld:'vCTRLPAG'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV15SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A10567SolicitacaoFornecedorSeq',fld:'SOLICITACAOFORNECEDORSEQ'},{av:'A10565SolicitacaoFornecedorDtHrEmail',fld:'SOLICITACAOFORNECEDORDTHREMAIL'},{av:'A10566SolicitacaoFornecedorDtHrFinal',fld:'SOLICITACAOFORNECEDORDTHRFINAL'},{av:'AV18UsrCod',fld:'vUSRCOD'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV33Pgmdesc',fld:'vPGMDESC'},{av:'AV20MsgErro',fld:'vMSGERRO'},{av:'AV21SolicitacaoFornecedorSeq',fld:'vSOLICITACAOFORNECEDORSEQ'}],[{av:'AV20MsgErro',fld:'vMSGERRO'},{av:'AV33Pgmdesc',fld:'vPGMDESC'},{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV15SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV21SolicitacaoFornecedorSeq',fld:'vSOLICITACAOFORNECEDORSEQ'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}]];
   this.EvtParms["'PRIMEIRA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10PessoaId',fld:'vPESSOAID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV25ContLinhas',fld:'vCONTLINHAS',hsh:true},{av:'AV23Pag',fld:'vPAG'},{av:'AV22CtrlPag',fld:'vCTRLPAG'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV15SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A10567SolicitacaoFornecedorSeq',fld:'SOLICITACAOFORNECEDORSEQ'},{av:'A10565SolicitacaoFornecedorDtHrEmail',fld:'SOLICITACAOFORNECEDORDTHREMAIL'},{av:'A10566SolicitacaoFornecedorDtHrFinal',fld:'SOLICITACAOFORNECEDORDTHRFINAL'}],[{av:'AV22CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10PessoaId',fld:'vPESSOAID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV25ContLinhas',fld:'vCONTLINHAS',hsh:true},{av:'AV23Pag',fld:'vPAG'},{av:'AV22CtrlPag',fld:'vCTRLPAG'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV15SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A10567SolicitacaoFornecedorSeq',fld:'SOLICITACAOFORNECEDORSEQ'},{av:'A10565SolicitacaoFornecedorDtHrEmail',fld:'SOLICITACAOFORNECEDORDTHREMAIL'},{av:'A10566SolicitacaoFornecedorDtHrFinal',fld:'SOLICITACAOFORNECEDORDTHRFINAL'}],[{av:'AV22CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10PessoaId',fld:'vPESSOAID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV25ContLinhas',fld:'vCONTLINHAS',hsh:true},{av:'AV23Pag',fld:'vPAG'},{av:'AV22CtrlPag',fld:'vCTRLPAG'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV15SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A10567SolicitacaoFornecedorSeq',fld:'SOLICITACAOFORNECEDORSEQ'},{av:'A10565SolicitacaoFornecedorDtHrEmail',fld:'SOLICITACAOFORNECEDORDTHREMAIL'},{av:'A10566SolicitacaoFornecedorDtHrFinal',fld:'SOLICITACAOFORNECEDORDTHRFINAL'}],[{av:'AV22CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'ULTIMA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV10PessoaId',fld:'vPESSOAID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV25ContLinhas',fld:'vCONTLINHAS',hsh:true},{av:'AV23Pag',fld:'vPAG'},{av:'AV22CtrlPag',fld:'vCTRLPAG'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'AV15SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A10567SolicitacaoFornecedorSeq',fld:'SOLICITACAOFORNECEDORSEQ'},{av:'A10565SolicitacaoFornecedorDtHrEmail',fld:'SOLICITACAOFORNECEDORDTHREMAIL'},{av:'A10566SolicitacaoFornecedorDtHrFinal',fld:'SOLICITACAOFORNECEDORDTHRFINAL'}],[{av:'AV22CtrlPag',fld:'vCTRLPAG'}]];
   this.setVCMap("AV10PessoaId", "vPESSOAID", 0, "Collint");
   this.setVCMap("AV25ContLinhas", "vCONTLINHAS", 0, "int");
   this.setVCMap("A3370SolicitacaoEmpresaId", "SOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A3371SolicitacaoNumero", "SOLICITACAONUMERO", 0, "int");
   this.setVCMap("A10567SolicitacaoFornecedorSeq", "SOLICITACAOFORNECEDORSEQ", 0, "int");
   this.setVCMap("A10565SolicitacaoFornecedorDtHrEmail", "SOLICITACAOFORNECEDORDTHREMAIL", 0, "dtime");
   this.setVCMap("A10566SolicitacaoFornecedorDtHrFinal", "SOLICITACAOFORNECEDORDTHRFINAL", 0, "dtime");
   this.setVCMap("AV10PessoaId", "vPESSOAID", 0, "Collint");
   this.setVCMap("AV25ContLinhas", "vCONTLINHAS", 0, "int");
   this.setVCMap("A3370SolicitacaoEmpresaId", "SOLICITACAOEMPRESAID", 0, "char");
   this.setVCMap("AV8EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("A3371SolicitacaoNumero", "SOLICITACAONUMERO", 0, "int");
   this.setVCMap("A10567SolicitacaoFornecedorSeq", "SOLICITACAOFORNECEDORSEQ", 0, "int");
   this.setVCMap("A10565SolicitacaoFornecedorDtHrEmail", "SOLICITACAOFORNECEDORDTHREMAIL", 0, "dtime");
   this.setVCMap("A10566SolicitacaoFornecedorDtHrFinal", "SOLICITACAOFORNECEDORDTHRFINAL", 0, "dtime");
   GridContainer.addRefreshingVar({rfrVar:"AV10PessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV5bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV25ContLinhas"});
   GridContainer.addRefreshingVar(this.GXValidFnc[65]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar({rfrVar:"A3370SolicitacaoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV8EmpresaLogadaId"});
   GridContainer.addRefreshingVar({rfrVar:"A3371SolicitacaoNumero"});
   GridContainer.addRefreshingVar(this.GXValidFnc[10]);
   GridContainer.addRefreshingVar({rfrVar:"A10567SolicitacaoFornecedorSeq"});
   GridContainer.addRefreshingVar({rfrVar:"A10565SolicitacaoFornecedorDtHrEmail"});
   GridContainer.addRefreshingVar({rfrVar:"A10566SolicitacaoFornecedorDtHrFinal"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsolicitacaofornecedor());
