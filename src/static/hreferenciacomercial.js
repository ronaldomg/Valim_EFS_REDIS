/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:3:15.58
*/
gx.evt.autoSkip = false;
gx.define('hreferenciacomercial', false, function () {
   this.ServerClass =  "hreferenciacomercial" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV26EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.AV31Chamada=gx.fn.getControlValue("vCHAMADA") ;
   };
   this.Valid_Referenciacomercialcidadeid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(49) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("REFERENCIACOMERCIALCIDADEID", gx.fn.currentGridRowImpl(49));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e163j2_client=function()
   {
      this.executeServerEvent("'CONSULTALOGGERAL'", true, null, false, false);
   };
   this.e193j2_client=function()
   {
      this.executeServerEvent("'CONSULTALOG'", true, arguments[0], false, false);
   };
   this.e113j2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e123j2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e173j2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e133j2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e143j2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e153j2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e223j2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e233j2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e243j2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,24,27,30,32,34,36,38,40,43,45,46,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,74];
   this.GXLastCtrlId =74;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",49,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hreferenciacomercial",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(69,50,"PESSOAID","","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(524,51,"REFERENCIACOMERCIALSEQUENCIA","","","ReferenciaComercialSequencia","int",0,"px",4,4,"right",null,[],524,"ReferenciaComercialSequencia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(514,52,"REFERENCIACOMERCIALDATA","","","ReferenciaComercialData","date",0,"px",10,10,"right",null,[],514,"ReferenciaComercialData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tiporefcomercial",53,"vTIPOREFCOMERCIAL","Tipo","","TipoRefComercial","char",0,"px",10,10,"left",null,[],"Tiporefcomercial","TipoRefComercial",true,0,false,false,"Attribute",1,"");
   GridContainer.addRadioButton(513,54,"REFERENCIACOMERCIALTIPO","Tipo","ReferenciaComercialTipo","char",null,false,false,false,"");
   GridContainer.addSingleLineEdit(517,55,"REFERENCIACOMERCIALENDERECO","Endereço","","ReferenciaComercialEndereco","svchar",0,"px",50,50,"left",null,[],517,"ReferenciaComercialEndereco",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(518,56,"REFERENCIACOMERCIALNUMERO","Número","","ReferenciaComercialNumero","int",0,"px",7,7,"right",null,[],518,"ReferenciaComercialNumero",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(519,57,"REFERENCIACOMERCIALCOMPLEMENTO","Complemento","","ReferenciaComercialComplemento","svchar",0,"px",15,15,"left",null,[],519,"ReferenciaComercialComplemento",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(520,58,"REFERENCIACOMERCIALBAIRRO","Bairro","","ReferenciaComercialBairro","svchar",0,"px",35,35,"left",null,[],520,"ReferenciaComercialBairro",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(521,59,"REFERENCIACOMERCIALCIDADEID","Cidade","","ReferenciaComercialCidadeId","int",0,"px",8,8,"right",null,[],521,"ReferenciaComercialCidadeId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(522,60,"REFERENCIACOMERCIALCIDADENOME","Nome Cidade","","ReferenciaComercialCidadeNome","svchar",0,"px",40,40,"left",null,[],522,"ReferenciaComercialCidadeNome",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(515,61,"REFERENCIACOMERCIALOBSERVACAO","Observação","","ReferenciaComercialObservacao","svchar",0,"px",100,80,"left",null,[],515,"ReferenciaComercialObservacao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(516,62,"REFERENCIACOMERCIALORGAO","Orgão","","ReferenciaComercialOrgao","svchar",0,"px",40,40,"left",null,[],516,"ReferenciaComercialOrgao",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmplog","vBMPLOG",63,0,"px",17,"px","e193j2_client","","Log","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",64,0,"px",17,"px",null,"","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",65,0,"px",17,"px",null,"","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",66,0,"px",17,"px",null,"","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(227,67,"EMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],227,"EmpresaPessoasEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAID",gxz:"ZV23PessoaId",gxold:"OV23PessoaId",gxvar:"AV23PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV23PessoaId,0)},c2v:function(){gx.O.AV23PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV21PessoaFantasia",gxold:"OV21PessoaFantasia",gxvar:"AV21PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PessoaFantasia=Value},v2z:function(Value){gx.O.ZV21PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV21PessoaFantasia,0)},c2v:function(){gx.O.AV21PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vREFERENCIACOMERCIALTIPO",gxz:"ZV22ReferenciaComercialTipo",gxold:"OV22ReferenciaComercialTipo",gxvar:"AV22ReferenciaComercialTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22ReferenciaComercialTipo=Value},v2z:function(Value){gx.O.ZV22ReferenciaComercialTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vREFERENCIACOMERCIALTIPO",gx.O.AV22ReferenciaComercialTipo)},c2v:function(){gx.O.AV22ReferenciaComercialTipo=this.val()},val:function(){return gx.fn.getControlValue("vREFERENCIACOMERCIALTIPO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TABLE4",grid:0};
   GXValidFnc[27]={fld:"TABLE6",grid:0};
   GXValidFnc[30]={fld:"IMAGE2",grid:0};
   GXValidFnc[32]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[34]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[36]={fld:"BTNHELP",grid:0};
   GXValidFnc[38]={fld:"BTNLOG",grid:0};
   GXValidFnc[40]={fld:"TABLE5",grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(49),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALSEQUENCIA",gxz:"Z524ReferenciaComercialSequencia",gxold:"O524ReferenciaComercialSequencia",gxvar:"A524ReferenciaComercialSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A524ReferenciaComercialSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z524ReferenciaComercialSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REFERENCIACOMERCIALSEQUENCIA",row || gx.fn.currentGridRowImpl(49),gx.O.A524ReferenciaComercialSequencia,0)},c2v:function(){gx.O.A524ReferenciaComercialSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REFERENCIACOMERCIALSEQUENCIA",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALDATA",gxz:"Z514ReferenciaComercialData",gxold:"O514ReferenciaComercialData",gxvar:"A514ReferenciaComercialData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A514ReferenciaComercialData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z514ReferenciaComercialData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("REFERENCIACOMERCIALDATA",row || gx.fn.currentGridRowImpl(49),gx.O.A514ReferenciaComercialData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A514ReferenciaComercialData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("REFERENCIACOMERCIALDATA",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOREFCOMERCIAL",gxz:"ZV33TipoRefComercial",gxold:"OV33TipoRefComercial",gxvar:"AV33TipoRefComercial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV33TipoRefComercial=Value},v2z:function(Value){gx.O.ZV33TipoRefComercial=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOREFCOMERCIAL",row || gx.fn.currentGridRowImpl(49),gx.O.AV33TipoRefComercial,0)},c2v:function(){gx.O.AV33TipoRefComercial=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOREFCOMERCIAL",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALTIPO",gxz:"Z513ReferenciaComercialTipo",gxold:"O513ReferenciaComercialTipo",gxvar:"A513ReferenciaComercialTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",inputType:'text',v2v:function(Value){gx.O.A513ReferenciaComercialTipo=Value},v2z:function(Value){gx.O.Z513ReferenciaComercialTipo=Value},v2c:function(row){gx.fn.setGridControlValue("REFERENCIACOMERCIALTIPO",row || gx.fn.currentGridRowImpl(49),gx.O.A513ReferenciaComercialTipo,0)},c2v:function(){gx.O.A513ReferenciaComercialTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("REFERENCIACOMERCIALTIPO",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALENDERECO",gxz:"Z517ReferenciaComercialEndereco",gxold:"O517ReferenciaComercialEndereco",gxvar:"A517ReferenciaComercialEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A517ReferenciaComercialEndereco=Value},v2z:function(Value){gx.O.Z517ReferenciaComercialEndereco=Value},v2c:function(row){gx.fn.setGridControlValue("REFERENCIACOMERCIALENDERECO",row || gx.fn.currentGridRowImpl(49),gx.O.A517ReferenciaComercialEndereco,0)},c2v:function(){gx.O.A517ReferenciaComercialEndereco=this.val()},val:function(row){return gx.fn.getGridControlValue("REFERENCIACOMERCIALENDERECO",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALNUMERO",gxz:"Z518ReferenciaComercialNumero",gxold:"O518ReferenciaComercialNumero",gxvar:"A518ReferenciaComercialNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A518ReferenciaComercialNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z518ReferenciaComercialNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REFERENCIACOMERCIALNUMERO",row || gx.fn.currentGridRowImpl(49),gx.O.A518ReferenciaComercialNumero,0)},c2v:function(){gx.O.A518ReferenciaComercialNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REFERENCIACOMERCIALNUMERO",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALCOMPLEMENTO",gxz:"Z519ReferenciaComercialComplemento",gxold:"O519ReferenciaComercialComplemento",gxvar:"A519ReferenciaComercialComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A519ReferenciaComercialComplemento=Value},v2z:function(Value){gx.O.Z519ReferenciaComercialComplemento=Value},v2c:function(row){gx.fn.setGridControlValue("REFERENCIACOMERCIALCOMPLEMENTO",row || gx.fn.currentGridRowImpl(49),gx.O.A519ReferenciaComercialComplemento,0)},c2v:function(){gx.O.A519ReferenciaComercialComplemento=this.val()},val:function(row){return gx.fn.getGridControlValue("REFERENCIACOMERCIALCOMPLEMENTO",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALBAIRRO",gxz:"Z520ReferenciaComercialBairro",gxold:"O520ReferenciaComercialBairro",gxvar:"A520ReferenciaComercialBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A520ReferenciaComercialBairro=Value},v2z:function(Value){gx.O.Z520ReferenciaComercialBairro=Value},v2c:function(row){gx.fn.setGridControlValue("REFERENCIACOMERCIALBAIRRO",row || gx.fn.currentGridRowImpl(49),gx.O.A520ReferenciaComercialBairro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A520ReferenciaComercialBairro=this.val()},val:function(row){return gx.fn.getGridControlValue("REFERENCIACOMERCIALBAIRRO",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:this.Valid_Referenciacomercialcidadeid,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALCIDADEID",gxz:"Z521ReferenciaComercialCidadeId",gxold:"O521ReferenciaComercialCidadeId",gxvar:"A521ReferenciaComercialCidadeId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A521ReferenciaComercialCidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z521ReferenciaComercialCidadeId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REFERENCIACOMERCIALCIDADEID",row || gx.fn.currentGridRowImpl(49),gx.O.A521ReferenciaComercialCidadeId,0)},c2v:function(){gx.O.A521ReferenciaComercialCidadeId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REFERENCIACOMERCIALCIDADEID",row || gx.fn.currentGridRowImpl(49),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALCIDADENOME",gxz:"Z522ReferenciaComercialCidadeNome",gxold:"O522ReferenciaComercialCidadeNome",gxvar:"A522ReferenciaComercialCidadeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A522ReferenciaComercialCidadeNome=Value},v2z:function(Value){gx.O.Z522ReferenciaComercialCidadeNome=Value},v2c:function(row){gx.fn.setGridControlValue("REFERENCIACOMERCIALCIDADENOME",row || gx.fn.currentGridRowImpl(49),gx.O.A522ReferenciaComercialCidadeNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A522ReferenciaComercialCidadeNome=this.val()},val:function(row){return gx.fn.getGridControlValue("REFERENCIACOMERCIALCIDADENOME",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALOBSERVACAO",gxz:"Z515ReferenciaComercialObservacao",gxold:"O515ReferenciaComercialObservacao",gxvar:"A515ReferenciaComercialObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A515ReferenciaComercialObservacao=Value},v2z:function(Value){gx.O.Z515ReferenciaComercialObservacao=Value},v2c:function(row){gx.fn.setGridControlValue("REFERENCIACOMERCIALOBSERVACAO",row || gx.fn.currentGridRowImpl(49),gx.O.A515ReferenciaComercialObservacao,0)},c2v:function(){gx.O.A515ReferenciaComercialObservacao=this.val()},val:function(row){return gx.fn.getGridControlValue("REFERENCIACOMERCIALOBSERVACAO",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"REFERENCIACOMERCIALORGAO",gxz:"Z516ReferenciaComercialOrgao",gxold:"O516ReferenciaComercialOrgao",gxvar:"A516ReferenciaComercialOrgao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A516ReferenciaComercialOrgao=Value},v2z:function(Value){gx.O.Z516ReferenciaComercialOrgao=Value},v2c:function(row){gx.fn.setGridControlValue("REFERENCIACOMERCIALORGAO",row || gx.fn.currentGridRowImpl(49),gx.O.A516ReferenciaComercialOrgao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A516ReferenciaComercialOrgao=this.val()},val:function(row){return gx.fn.getGridControlValue("REFERENCIACOMERCIALORGAO",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLOG",gxz:"ZV30bmpLog",gxold:"OV30bmpLog",gxvar:"AV30bmpLog",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpLog=Value},v2z:function(Value){gx.O.ZV30bmpLog=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLOG",row || gx.fn.currentGridRowImpl(49),gx.O.AV30bmpLog,gx.O.AV41Bmplog_GXI)},c2v:function(){gx.O.AV41Bmplog_GXI=this.val_GXI();gx.O.AV30bmpLog=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLOG",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLOG_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV41Bmplog_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(49),gx.O.AV7bmpAlt,gx.O.AV38Bmpalt_GXI)},c2v:function(){gx.O.AV38Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV38Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(49),gx.O.AV8bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV39Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(49),gx.O.AV16bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(49))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(49))}, gxvar_GXI:'AV40Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:49,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(49),gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(49))},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV23PessoaId = 0 ;
   this.ZV23PessoaId = 0 ;
   this.OV23PessoaId = 0 ;
   this.AV21PessoaFantasia = "" ;
   this.ZV21PessoaFantasia = "" ;
   this.OV21PessoaFantasia = "" ;
   this.AV22ReferenciaComercialTipo = "" ;
   this.ZV22ReferenciaComercialTipo = "" ;
   this.OV22ReferenciaComercialTipo = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z524ReferenciaComercialSequencia = 0 ;
   this.O524ReferenciaComercialSequencia = 0 ;
   this.Z514ReferenciaComercialData = gx.date.nullDate() ;
   this.O514ReferenciaComercialData = gx.date.nullDate() ;
   this.ZV33TipoRefComercial = "" ;
   this.OV33TipoRefComercial = "" ;
   this.Z513ReferenciaComercialTipo = "" ;
   this.O513ReferenciaComercialTipo = "" ;
   this.Z517ReferenciaComercialEndereco = "" ;
   this.O517ReferenciaComercialEndereco = "" ;
   this.Z518ReferenciaComercialNumero = 0 ;
   this.O518ReferenciaComercialNumero = 0 ;
   this.Z519ReferenciaComercialComplemento = "" ;
   this.O519ReferenciaComercialComplemento = "" ;
   this.Z520ReferenciaComercialBairro = "" ;
   this.O520ReferenciaComercialBairro = "" ;
   this.Z521ReferenciaComercialCidadeId = 0 ;
   this.O521ReferenciaComercialCidadeId = 0 ;
   this.Z522ReferenciaComercialCidadeNome = "" ;
   this.O522ReferenciaComercialCidadeNome = "" ;
   this.Z515ReferenciaComercialObservacao = "" ;
   this.O515ReferenciaComercialObservacao = "" ;
   this.Z516ReferenciaComercialOrgao = "" ;
   this.O516ReferenciaComercialOrgao = "" ;
   this.ZV30bmpLog = "" ;
   this.OV30bmpLog = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV23PessoaId = 0 ;
   this.AV21PessoaFantasia = "" ;
   this.AV22ReferenciaComercialTipo = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV26EmpresaPessoasEmpresaId = "" ;
   this.AV31Chamada = "" ;
   this.A69PessoaId = 0 ;
   this.A524ReferenciaComercialSequencia = 0 ;
   this.A514ReferenciaComercialData = gx.date.nullDate() ;
   this.AV33TipoRefComercial = "" ;
   this.A513ReferenciaComercialTipo = "" ;
   this.A517ReferenciaComercialEndereco = "" ;
   this.A518ReferenciaComercialNumero = 0 ;
   this.A519ReferenciaComercialComplemento = "" ;
   this.A520ReferenciaComercialBairro = "" ;
   this.A521ReferenciaComercialCidadeId = 0 ;
   this.A522ReferenciaComercialCidadeNome = "" ;
   this.A515ReferenciaComercialObservacao = "" ;
   this.A516ReferenciaComercialOrgao = "" ;
   this.AV30bmpLog = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.Events = {"e163j2_client": ["'CONSULTALOGGERAL'", true] ,"e193j2_client": ["'CONSULTALOG'", true] ,"e113j2_client": ["'ANTERIOR'", true] ,"e123j2_client": ["'PROXIMO'", true] ,"e173j2_client": ["VPAGINA.CLICK", true] ,"e133j2_client": ["'NOVO'", true] ,"e143j2_client": ["'FECHAR'", true] ,"e153j2_client": ["'PROCURAR'", true] ,"e223j2_client": ["'ATUALIZAPAGINA'", true] ,"e233j2_client": ["ENTER", true] ,"e243j2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22ReferenciaComercialTipo',fld:'vREFERENCIACOMERCIALTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV23PessoaId',fld:'vPESSOAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A513ReferenciaComercialTipo',fld:'REFERENCIACOMERCIALTIPO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A524ReferenciaComercialSequencia',fld:'REFERENCIACOMERCIALSEQUENCIA'},{av:'AV21PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV31Chamada',fld:'vCHAMADA'}],[]];
   this.EvtParms["'CONSULTALOGGERAL'"] = [[{av:'AV26EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV23PessoaId',fld:'vPESSOAID'}],[{av:'AV32Log',fld:'vLOG'}]];
   this.EvtParms["'CONSULTALOG'"] = [[{av:'AV26EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV23PessoaId',fld:'vPESSOAID'},{av:'A524ReferenciaComercialSequencia',fld:'REFERENCIACOMERCIALSEQUENCIA'}],[{av:'AV32Log',fld:'vLOG'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22ReferenciaComercialTipo',fld:'vREFERENCIACOMERCIALTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV23PessoaId',fld:'vPESSOAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A513ReferenciaComercialTipo',fld:'REFERENCIACOMERCIALTIPO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A524ReferenciaComercialSequencia',fld:'REFERENCIACOMERCIALSEQUENCIA'},{av:'AV21PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV31Chamada',fld:'vCHAMADA'}],[{ctrl:'PESSOAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOAID","Title")',ctrl:'PESSOAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'REFERENCIACOMERCIALSEQUENCIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REFERENCIACOMERCIALSEQUENCIA","Title")',ctrl:'REFERENCIACOMERCIALSEQUENCIA',prop:'Title'},{ctrl:'REFERENCIACOMERCIALDATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REFERENCIACOMERCIALDATA","Title")',ctrl:'REFERENCIACOMERCIALDATA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22ReferenciaComercialTipo',fld:'vREFERENCIACOMERCIALTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV23PessoaId',fld:'vPESSOAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A513ReferenciaComercialTipo',fld:'REFERENCIACOMERCIALTIPO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A524ReferenciaComercialSequencia',fld:'REFERENCIACOMERCIALSEQUENCIA'},{av:'AV21PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV31Chamada',fld:'vCHAMADA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22ReferenciaComercialTipo',fld:'vREFERENCIACOMERCIALTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV23PessoaId',fld:'vPESSOAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A513ReferenciaComercialTipo',fld:'REFERENCIACOMERCIALTIPO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A524ReferenciaComercialSequencia',fld:'REFERENCIACOMERCIALSEQUENCIA'},{av:'AV21PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV31Chamada',fld:'vCHAMADA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A513ReferenciaComercialTipo',fld:'REFERENCIACOMERCIALTIPO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A524ReferenciaComercialSequencia',fld:'REFERENCIACOMERCIALSEQUENCIA'},{av:'AV21PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV31Chamada',fld:'vCHAMADA'}],[{av:'AV33TipoRefComercial',fld:'vTIPOREFCOMERCIAL'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPALT","Link")',ctrl:'vBMPALT',prop:'Link'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Link")',ctrl:'vBMPEXC',prop:'Link'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCON","Link")',ctrl:'vBMPCON',prop:'Link'},{av:'AV30bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22ReferenciaComercialTipo',fld:'vREFERENCIACOMERCIALTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV23PessoaId',fld:'vPESSOAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A513ReferenciaComercialTipo',fld:'REFERENCIACOMERCIALTIPO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A524ReferenciaComercialSequencia',fld:'REFERENCIACOMERCIALSEQUENCIA'},{av:'AV21PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV31Chamada',fld:'vCHAMADA'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV26EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV23PessoaId',fld:'vPESSOAID'},{av:'AV21PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV31Chamada',fld:'vCHAMADA'}],[{av:'AV31Chamada',fld:'vCHAMADA'},{av:'AV21PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV23PessoaId',fld:'vPESSOAID'},{av:'AV26EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV31Chamada',fld:'vCHAMADA'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22ReferenciaComercialTipo',fld:'vREFERENCIACOMERCIALTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV23PessoaId',fld:'vPESSOAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A513ReferenciaComercialTipo',fld:'REFERENCIACOMERCIALTIPO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A524ReferenciaComercialSequencia',fld:'REFERENCIACOMERCIALSEQUENCIA'},{av:'AV21PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV31Chamada',fld:'vCHAMADA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22ReferenciaComercialTipo',fld:'vREFERENCIACOMERCIALTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV26EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV23PessoaId',fld:'vPESSOAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A513ReferenciaComercialTipo',fld:'REFERENCIACOMERCIALTIPO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A524ReferenciaComercialSequencia',fld:'REFERENCIACOMERCIALSEQUENCIA'},{av:'AV21PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV31Chamada',fld:'vCHAMADA'}],[]];
   this.setVCMap("AV26EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV31Chamada", "vCHAMADA", 0, "char");
   this.setVCMap("AV26EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV31Chamada", "vCHAMADA", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar({rfrVar:"AV26EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"A513ReferenciaComercialTipo", rfrProp:"Value", gxAttId:"513"});
   GridContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId", rfrProp:"Value", gxAttId:"227"});
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId", rfrProp:"Value", gxAttId:"69"});
   GridContainer.addRefreshingVar({rfrVar:"A524ReferenciaComercialSequencia", rfrProp:"Value", gxAttId:"524"});
   GridContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridContainer.addRefreshingVar({rfrVar:"AV31Chamada"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hreferenciacomercial());
