/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:14:4.28
*/
gx.evt.autoSkip = false;
gx.define('hmensalidade', false, function () {
   this.ServerClass =  "hmensalidade" ;
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
      this.AV36MensalidadePagRec=gx.fn.getControlValue("vMENSALIDADEPAGREC") ;
      this.AV40SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV41MensalidadePagRecParm=gx.fn.getControlValue("vMENSALIDADEPAGRECPARM") ;
   };
   this.Valid_Pessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(61) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PESSOAID", gx.fn.currentGridRowImpl(61));
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
   this.Valid_Empresapessoasempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(61) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("EMPRESAPESSOASEMPRESAID", gx.fn.currentGridRowImpl(61));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11bk2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12bk2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e21bk2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22bk2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23bk2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e16bk2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13bk2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14bk2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15bk2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e17bk2_client=function()
   {
      this.executeServerEvent("'LIMPAR'", true, null, false, false);
   };
   this.e24bk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25bk2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,27,29,31,36,39,42,44,46,48,50,52,55,57,58,62,63,64,65,66,67,68,69,70,71,72,73,74,75,82,83,84];
   this.GXLastCtrlId =84;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",61,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmensalidade",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(69,62,"PESSOAID","Cli./Forn.","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(71,63,"PESSOAFANTASIA","Nome do Cliente/Fornecedor","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(3085,64,"MENSALIDADEPAGREC","Pag/Rec","MensalidadePagRec","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit("Mesano",65,"vMESANO","Mês/Ano","","MesAno","char",0,"px",7,7,"left",null,[],"Mesano","MesAno",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2010,66,"MENSALIDADEMES","Mês","","MensalidadeMes","int",0,"px",2,2,"right",null,[],2010,"MensalidadeMes",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2009,67,"MENSALIDADEANO","Ano","","MensalidadeAno","int",0,"px",4,4,"right",null,[],2009,"MensalidadeAno",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2011,68,"MENSALIDADEDIAVENCIMENTO","Dia Vencimento","","MensalidadeDiaVencimento","int",0,"px",2,2,"right",null,[],2011,"MensalidadeDiaVencimento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2008,69,"MENSALIDADEPCACRDES","Perc Acrésc/Desc","","MensalidadePcAcrDes","decimal",0,"px",7,7,"right",null,[],2008,"MensalidadePcAcrDes",true,3,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2012,70,"MENSALIDADEVALOR","Valor","","MensalidadeValor","decimal",0,"px",13,13,"right",null,[],2012,"MensalidadeValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2989,71,"MENSALIDADECCUSID","Centro de Custo","","MensalidadeCCusId","svchar",0,"px",30,30,"left",null,[],2989,"MensalidadeCCusId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",72,0,"px",17,"px","e21bk2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",73,0,"px",17,"px","e22bk2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",74,0,"px",17,"px","e23bk2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(227,75,"EMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],227,"EmpresaPessoasEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE11",grid:0};
   GXValidFnc[14]={fld:"TABLE3",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAID",gxz:"ZV27PessoaId",gxold:"OV27PessoaId",gxvar:"AV27PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV27PessoaId,0)},c2v:function(){gx.O.AV27PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV28PessoaFantasia",gxold:"OV28PessoaFantasia",gxvar:"AV28PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PessoaFantasia=Value},v2z:function(Value){gx.O.ZV28PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV28PessoaFantasia,0)},c2v:function(){gx.O.AV28PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[24]={fld:"TABLE12",grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMES",gxz:"ZV30Mes",gxold:"OV30Mes",gxvar:"AV30Mes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30Mes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30Mes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMES",gx.O.AV30Mes,0)},c2v:function(){gx.O.AV30Mes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMES",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vANO",gxz:"ZV31Ano",gxold:"OV31Ano",gxvar:"AV31Ano",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Ano=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31Ano=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANO",gx.O.AV31Ano,0)},c2v:function(){gx.O.AV31Ano=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANO",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLE4",grid:0};
   GXValidFnc[39]={fld:"TABLE8",grid:0};
   GXValidFnc[42]={fld:"IMAGE2",grid:0};
   GXValidFnc[44]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[46]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[48]={fld:"BTNHELP",grid:0};
   GXValidFnc[50]={fld:"BTNLIMPAR",grid:0};
   GXValidFnc[52]={fld:"TABLE5",grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[63],ip:[63,62,75],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(61),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(61),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(61),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADEPAGREC",gxz:"Z3085MensalidadePagRec",gxold:"O3085MensalidadePagRec",gxvar:"A3085MensalidadePagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3085MensalidadePagRec=Value},v2z:function(Value){gx.O.Z3085MensalidadePagRec=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MENSALIDADEPAGREC",row || gx.fn.currentGridRowImpl(61),gx.O.A3085MensalidadePagRec);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3085MensalidadePagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("MENSALIDADEPAGREC",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:7,dec:0,sign:false,ro:0,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vMESANO",gxz:"ZV37MesAno",gxold:"OV37MesAno",gxvar:"AV37MesAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV37MesAno=Value},v2z:function(Value){gx.O.ZV37MesAno=Value},v2c:function(row){gx.fn.setGridControlValue("vMESANO",row || gx.fn.currentGridRowImpl(61),gx.O.AV37MesAno,0)},c2v:function(){gx.O.AV37MesAno=this.val()},val:function(row){return gx.fn.getGridControlValue("vMESANO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADEMES",gxz:"Z2010MensalidadeMes",gxold:"O2010MensalidadeMes",gxvar:"A2010MensalidadeMes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2010MensalidadeMes=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2010MensalidadeMes=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSALIDADEMES",row || gx.fn.currentGridRowImpl(61),gx.O.A2010MensalidadeMes,0)},c2v:function(){gx.O.A2010MensalidadeMes=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENSALIDADEMES",row || gx.fn.currentGridRowImpl(61),'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADEANO",gxz:"Z2009MensalidadeAno",gxold:"O2009MensalidadeAno",gxvar:"A2009MensalidadeAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2009MensalidadeAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2009MensalidadeAno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSALIDADEANO",row || gx.fn.currentGridRowImpl(61),gx.O.A2009MensalidadeAno,0)},c2v:function(){gx.O.A2009MensalidadeAno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENSALIDADEANO",row || gx.fn.currentGridRowImpl(61),'.')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADEDIAVENCIMENTO",gxz:"Z2011MensalidadeDiaVencimento",gxold:"O2011MensalidadeDiaVencimento",gxvar:"A2011MensalidadeDiaVencimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2011MensalidadeDiaVencimento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2011MensalidadeDiaVencimento=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENSALIDADEDIAVENCIMENTO",row || gx.fn.currentGridRowImpl(61),gx.O.A2011MensalidadeDiaVencimento,0)},c2v:function(){gx.O.A2011MensalidadeDiaVencimento=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENSALIDADEDIAVENCIMENTO",row || gx.fn.currentGridRowImpl(61),'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"decimal",len:7,dec:3,sign:true,pic:"ZZ9.999",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADEPCACRDES",gxz:"Z2008MensalidadePcAcrDes",gxold:"O2008MensalidadePcAcrDes",gxvar:"A2008MensalidadePcAcrDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2008MensalidadePcAcrDes=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2008MensalidadePcAcrDes=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MENSALIDADEPCACRDES",row || gx.fn.currentGridRowImpl(61),gx.O.A2008MensalidadePcAcrDes,3,',')},c2v:function(){gx.O.A2008MensalidadePcAcrDes=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MENSALIDADEPCACRDES",row || gx.fn.currentGridRowImpl(61),'.',',')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"decimal",len:11,dec:2,sign:false,pic:"ZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADEVALOR",gxz:"Z2012MensalidadeValor",gxold:"O2012MensalidadeValor",gxvar:"A2012MensalidadeValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2012MensalidadeValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2012MensalidadeValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MENSALIDADEVALOR",row || gx.fn.currentGridRowImpl(61),gx.O.A2012MensalidadeValor,2,',')},c2v:function(){gx.O.A2012MensalidadeValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MENSALIDADEVALOR",row || gx.fn.currentGridRowImpl(61),'.',',')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADECCUSID",gxz:"Z2989MensalidadeCCusId",gxold:"O2989MensalidadeCCusId",gxvar:"A2989MensalidadeCCusId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2989MensalidadeCCusId=Value},v2z:function(Value){gx.O.Z2989MensalidadeCCusId=Value},v2c:function(row){gx.fn.setGridControlValue("MENSALIDADECCUSID",row || gx.fn.currentGridRowImpl(61),gx.O.A2989MensalidadeCCusId,0)},c2v:function(){gx.O.A2989MensalidadeCCusId=this.val()},val:function(row){return gx.fn.getGridControlValue("MENSALIDADECCUSID",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(61),gx.O.AV7bmpAlt,gx.O.AV46Bmpalt_GXI)},c2v:function(){gx.O.AV46Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV46Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(61),gx.O.AV8bmpExc,gx.O.AV47Bmpexc_GXI)},c2v:function(){gx.O.AV47Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV47Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(61),gx.O.AV16bmpCon,gx.O.AV48Bmpcon_GXI)},c2v:function(){gx.O.AV48Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV48Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:this.Valid_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(61),gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[82]={fld:"JSJSON", format:2,grid:0};
   GXValidFnc[83]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV29EmpresaPessoasEmpresaId",gxold:"OV29EmpresaPessoasEmpresaId",gxvar:"AV29EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV29EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV29EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV29EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[84]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV27PessoaId = 0 ;
   this.ZV27PessoaId = 0 ;
   this.OV27PessoaId = 0 ;
   this.AV28PessoaFantasia = "" ;
   this.ZV28PessoaFantasia = "" ;
   this.OV28PessoaFantasia = "" ;
   this.AV30Mes = 0 ;
   this.ZV30Mes = 0 ;
   this.OV30Mes = 0 ;
   this.AV31Ano = 0 ;
   this.ZV31Ano = 0 ;
   this.OV31Ano = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.Z3085MensalidadePagRec = "" ;
   this.O3085MensalidadePagRec = "" ;
   this.ZV37MesAno = "" ;
   this.OV37MesAno = "" ;
   this.Z2010MensalidadeMes = 0 ;
   this.O2010MensalidadeMes = 0 ;
   this.Z2009MensalidadeAno = 0 ;
   this.O2009MensalidadeAno = 0 ;
   this.Z2011MensalidadeDiaVencimento = 0 ;
   this.O2011MensalidadeDiaVencimento = 0 ;
   this.Z2008MensalidadePcAcrDes = 0 ;
   this.O2008MensalidadePcAcrDes = 0 ;
   this.Z2012MensalidadeValor = 0 ;
   this.O2012MensalidadeValor = 0 ;
   this.Z2989MensalidadeCCusId = "" ;
   this.O2989MensalidadeCCusId = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.AV29EmpresaPessoasEmpresaId = "" ;
   this.ZV29EmpresaPessoasEmpresaId = "" ;
   this.OV29EmpresaPessoasEmpresaId = "" ;
   this.AV27PessoaId = 0 ;
   this.AV28PessoaFantasia = "" ;
   this.AV30Mes = 0 ;
   this.AV31Ano = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV29EmpresaPessoasEmpresaId = "" ;
   this.AV41MensalidadePagRecParm = "" ;
   this.A69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A3085MensalidadePagRec = "" ;
   this.AV37MesAno = "" ;
   this.A2010MensalidadeMes = 0 ;
   this.A2009MensalidadeAno = 0 ;
   this.A2011MensalidadeDiaVencimento = 0 ;
   this.A2008MensalidadePcAcrDes = 0 ;
   this.A2012MensalidadeValor = 0 ;
   this.A2989MensalidadeCCusId = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.AV36MensalidadePagRec = "" ;
   this.AV40SnRecuperaFiltro = "" ;
   this.Events = {"e11bk2_client": ["'ANTERIOR'", true] ,"e12bk2_client": ["'PROXIMO'", true] ,"e21bk2_client": ["'ALTERAR'", true] ,"e22bk2_client": ["'EXCLUIR'", true] ,"e23bk2_client": ["'CONSULTAR'", true] ,"e16bk2_client": ["VPAGINA.CLICK", true] ,"e13bk2_client": ["'NOVO'", true] ,"e14bk2_client": ["'FECHAR'", true] ,"e15bk2_client": ["'PROCURAR'", true] ,"e17bk2_client": ["'LIMPAR'", true] ,"e24bk2_client": ["ENTER", true] ,"e25bk2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'AV30Mes',fld:'vMES'},{av:'AV31Ano',fld:'vANO'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV36MensalidadePagRec',fld:'vMENSALIDADEPAGREC',hsh:true},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28PessoaFantasia',fld:'vPESSOAFANTASIA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'AV30Mes',fld:'vMES'},{av:'AV31Ano',fld:'vANO'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV36MensalidadePagRec',fld:'vMENSALIDADEPAGREC',hsh:true},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28PessoaFantasia',fld:'vPESSOAFANTASIA'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'AV28PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV30Mes',fld:'vMES'},{av:'AV31Ano',fld:'vANO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'AV30Mes',fld:'vMES'},{av:'AV31Ano',fld:'vANO'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV36MensalidadePagRec',fld:'vMENSALIDADEPAGREC',hsh:true},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28PessoaFantasia',fld:'vPESSOAFANTASIA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'AV30Mes',fld:'vMES'},{av:'AV31Ano',fld:'vANO'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV36MensalidadePagRec',fld:'vMENSALIDADEPAGREC',hsh:true},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'AV28PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV30Mes',fld:'vMES'},{av:'AV31Ano',fld:'vANO'}],[{av:'AV38MesAux',fld:'vMESAUX'},{av:'AV39AnoAux',fld:'vANOAUX'},{av:'AV37MesAno',fld:'vMESANO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'A3085MensalidadePagRec',fld:'MENSALIDADEPAGREC'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'AV28PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV30Mes',fld:'vMES'},{av:'AV31Ano',fld:'vANO'}],[{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'A3085MensalidadePagRec',fld:'MENSALIDADEPAGREC'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'A3085MensalidadePagRec',fld:'MENSALIDADEPAGREC'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'AV28PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV30Mes',fld:'vMES'},{av:'AV31Ano',fld:'vANO'}],[{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'A3085MensalidadePagRec',fld:'MENSALIDADEPAGREC'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'A3085MensalidadePagRec',fld:'MENSALIDADEPAGREC'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'AV28PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV30Mes',fld:'vMES'},{av:'AV31Ano',fld:'vANO'}],[{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'A3085MensalidadePagRec',fld:'MENSALIDADEPAGREC'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'AV30Mes',fld:'vMES'},{av:'AV31Ano',fld:'vANO'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV36MensalidadePagRec',fld:'vMENSALIDADEPAGREC',hsh:true},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28PessoaFantasia',fld:'vPESSOAFANTASIA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV36MensalidadePagRec',fld:'vMENSALIDADEPAGREC',hsh:true}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'AV30Mes',fld:'vMES'},{av:'AV31Ano',fld:'vANO'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV36MensalidadePagRec',fld:'vMENSALIDADEPAGREC',hsh:true},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28PessoaFantasia',fld:'vPESSOAFANTASIA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'LIMPAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27PessoaId',fld:'vPESSOAID'},{av:'AV30Mes',fld:'vMES'},{av:'AV31Ano',fld:'vANO'},{av:'AV29EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV36MensalidadePagRec',fld:'vMENSALIDADEPAGREC',hsh:true},{av:'AV40SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2010MensalidadeMes',fld:'MENSALIDADEMES'},{av:'A2009MensalidadeAno',fld:'MENSALIDADEANO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28PessoaFantasia',fld:'vPESSOAFANTASIA'}],[]];
   this.setPrompt("PROMPT_PESSOAID", [17]);
   this.setVCMap("AV36MensalidadePagRec", "vMENSALIDADEPAGREC", 0, "char");
   this.setVCMap("AV40SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41MensalidadePagRecParm", "vMENSALIDADEPAGRECPARM", 0, "char");
   this.setVCMap("AV36MensalidadePagRec", "vMENSALIDADEPAGREC", 0, "char");
   this.setVCMap("AV40SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[83]);
   GridContainer.addRefreshingVar({rfrVar:"AV36MensalidadePagRec"});
   GridContainer.addRefreshingVar({rfrVar:"AV40SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A2010MensalidadeMes", rfrProp:"Value", gxAttId:"2010"});
   GridContainer.addRefreshingVar({rfrVar:"A2009MensalidadeAno", rfrProp:"Value", gxAttId:"2009"});
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmensalidade());
