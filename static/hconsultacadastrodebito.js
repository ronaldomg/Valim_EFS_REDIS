/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:37.92
*/
gx.evt.autoSkip = false;
gx.define('hconsultacadastrodebito', false, function () {
   this.ServerClass =  "hconsultacadastrodebito" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV105SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV108Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A70PessoaRazaoSocial=gx.fn.getControlValue("PESSOARAZAOSOCIAL") ;
   };
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(57) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PESSOAID", gx.fn.currentGridRowImpl(57));
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
   this.Validv_Pessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(57) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PESSOAID", gx.fn.currentGridRowImpl(57));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11kb2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e12kb2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14kb2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e15kb2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e19kb2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20kb2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21kb2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e13kb2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e22kb2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e23kb2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,25,27,29,31,33,36,38,40,43,45,48,50,58,59,60,61,62,63,64,65,66,67,68,69,70,76,80,83,85,87,89,90,91,92,93,94,95,96,97,99,100];
   this.GXLastCtrlId =100;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",57,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacadastrodebito",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(69,58,"PESSOAID","","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Pessoarazaosocial",59,"vPESSOARAZAOSOCIAL","Razão Social","","PessoaRazaoSocial","char",0,"px",40,40,"left",null,[],"Pessoarazaosocial","PessoaRazaoSocial",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Debitoreferencia",60,"vDEBITOREFERENCIA","Referência","","DebitoReferencia","char",0,"px",7,7,"left",null,[],"Debitoreferencia","DebitoReferencia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3057,61,"DEBITOREFERENCIA","Data Referência","","DebitoReferencia","date",0,"px",10,10,"right",null,[],3057,"DebitoReferencia",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3058,62,"DEBITOSEQUENCIA","Seq","","DebitoSequencia","int",0,"px",4,4,"right",null,[],3058,"DebitoSequencia",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3060,63,"DEBITOTIPO","Tipo","DebitoTipo","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit("Debitodescricao",64,"vDEBITODESCRICAO","Descrição","","DebitoDescricao","svchar",0,"px",40,40,"left",null,[],"Debitodescricao","DebitoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3059,65,"DEBITODESCRICAO","Descrição","","DebitoDescricao","svchar",0,"px",150,80,"left",null,[],3059,"DebitoDescricao",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3062,66,"DEBITOVALOR","Valor","","DebitoValor","decimal",0,"px",22,22,"right",null,[],3062,"DebitoValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addComboBox(3061,67,"DEBITOCREDITO","D/C","DebitoCredito","char",null,0,true,false,0,"px","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",68,0,"px",17,"px","e19kb2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",69,0,"px",17,"px","e20kb2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",70,0,"px",17,"px","e21kb2_client","","Cons","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE10",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAID",gxz:"ZV70PessoaId",gxold:"OV70PessoaId",gxvar:"AV70PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV70PessoaId,0)},c2v:function(){gx.O.AV70PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL2",gxz:"ZV85PessoaRazaoSocial2",gxold:"OV85PessoaRazaoSocial2",gxvar:"AV85PessoaRazaoSocial2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85PessoaRazaoSocial2=Value},v2z:function(Value){gx.O.ZV85PessoaRazaoSocial2=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL2",gx.O.AV85PessoaRazaoSocial2,0)},c2v:function(){gx.O.AV85PessoaRazaoSocial2=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL2")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[19]={fld:"TABLE12",grid:0};
   GXValidFnc[22]={fld:"TABLE13",grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESINICIAL",gxz:"ZV86MesInicial",gxold:"OV86MesInicial",gxvar:"AV86MesInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86MesInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV86MesInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESINICIAL",gx.O.AV86MesInicial,0)},c2v:function(){gx.O.AV86MesInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOINICIAL",gxz:"ZV88AnoInicial",gxold:"OV88AnoInicial",gxvar:"AV88AnoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88AnoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV88AnoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOINICIAL",gx.O.AV88AnoInicial,0)},c2v:function(){gx.O.AV88AnoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLE14",grid:0};
   GXValidFnc[36]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESFINAL",gxz:"ZV87MesFinal",gxold:"OV87MesFinal",gxvar:"AV87MesFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87MesFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV87MesFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESFINAL",gx.O.AV87MesFinal,0)},c2v:function(){gx.O.AV87MesFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOFINAL",gxz:"ZV89AnoFinal",gxold:"OV89AnoFinal",gxvar:"AV89AnoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89AnoFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV89AnoFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOFINAL",gx.O.AV89AnoFinal,0)},c2v:function(){gx.O.AV89AnoFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOFINAL",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEBITOCREDITO",gxz:"ZV73DebitoCredito",gxold:"OV73DebitoCredito",gxvar:"AV73DebitoCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV73DebitoCredito=Value},v2z:function(Value){gx.O.ZV73DebitoCredito=Value},v2c:function(){gx.fn.setComboBoxValue("vDEBITOCREDITO",gx.O.AV73DebitoCredito)},c2v:function(){gx.O.AV73DebitoCredito=this.val()},val:function(){return gx.fn.getControlValue("vDEBITOCREDITO")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEBITOTIPO",gxz:"ZV74DebitoTipo",gxold:"OV74DebitoTipo",gxvar:"AV74DebitoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV74DebitoTipo=Value},v2z:function(Value){gx.O.ZV74DebitoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vDEBITOTIPO",gx.O.AV74DebitoTipo)},c2v:function(){gx.O.AV74DebitoTipo=this.val()},val:function(){return gx.fn.getControlValue("vDEBITOTIPO")},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[58],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(57),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV84PessoaRazaoSocial",gxold:"OV84PessoaRazaoSocial",gxvar:"AV84PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV84PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV84PessoaRazaoSocial=Value},v2c:function(row){gx.fn.setGridControlValue("vPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(57),gx.O.AV84PessoaRazaoSocial,0)},c2v:function(){gx.O.AV84PessoaRazaoSocial=this.val()},val:function(row){return gx.fn.getGridControlValue("vPESSOARAZAOSOCIAL",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:7,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDEBITOREFERENCIA",gxz:"ZV72DebitoReferencia",gxold:"OV72DebitoReferencia",gxvar:"AV72DebitoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV72DebitoReferencia=Value},v2z:function(Value){gx.O.ZV72DebitoReferencia=Value},v2c:function(row){gx.fn.setGridControlValue("vDEBITOREFERENCIA",row || gx.fn.currentGridRowImpl(57),gx.O.AV72DebitoReferencia,0)},c2v:function(){gx.O.AV72DebitoReferencia=this.val()},val:function(row){return gx.fn.getGridControlValue("vDEBITOREFERENCIA",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEBITOREFERENCIA",gxz:"Z3057DebitoReferencia",gxold:"O3057DebitoReferencia",gxvar:"A3057DebitoReferencia",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3057DebitoReferencia=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3057DebitoReferencia=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("DEBITOREFERENCIA",row || gx.fn.currentGridRowImpl(57),gx.O.A3057DebitoReferencia,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3057DebitoReferencia=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("DEBITOREFERENCIA",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEBITOSEQUENCIA",gxz:"Z3058DebitoSequencia",gxold:"O3058DebitoSequencia",gxvar:"A3058DebitoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3058DebitoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3058DebitoSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DEBITOSEQUENCIA",row || gx.fn.currentGridRowImpl(57),gx.O.A3058DebitoSequencia,0)},c2v:function(){gx.O.A3058DebitoSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DEBITOSEQUENCIA",row || gx.fn.currentGridRowImpl(57),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEBITOTIPO",gxz:"Z3060DebitoTipo",gxold:"O3060DebitoTipo",gxvar:"A3060DebitoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3060DebitoTipo=Value},v2z:function(Value){gx.O.Z3060DebitoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("DEBITOTIPO",row || gx.fn.currentGridRowImpl(57),gx.O.A3060DebitoTipo)},c2v:function(){gx.O.A3060DebitoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("DEBITOTIPO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDEBITODESCRICAO",gxz:"ZV83DebitoDescricao",gxold:"OV83DebitoDescricao",gxvar:"AV83DebitoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV83DebitoDescricao=Value},v2z:function(Value){gx.O.ZV83DebitoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vDEBITODESCRICAO",row || gx.fn.currentGridRowImpl(57),gx.O.AV83DebitoDescricao,0)},c2v:function(){gx.O.AV83DebitoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vDEBITODESCRICAO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:150,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEBITODESCRICAO",gxz:"Z3059DebitoDescricao",gxold:"O3059DebitoDescricao",gxvar:"A3059DebitoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3059DebitoDescricao=Value},v2z:function(Value){gx.O.Z3059DebitoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("DEBITODESCRICAO",row || gx.fn.currentGridRowImpl(57),gx.O.A3059DebitoDescricao,0)},c2v:function(){gx.O.A3059DebitoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("DEBITODESCRICAO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEBITOVALOR",gxz:"Z3062DebitoValor",gxold:"O3062DebitoValor",gxvar:"A3062DebitoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3062DebitoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3062DebitoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("DEBITOVALOR",row || gx.fn.currentGridRowImpl(57),gx.O.A3062DebitoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3062DebitoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("DEBITOVALOR",row || gx.fn.currentGridRowImpl(57),'.',',')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEBITOCREDITO",gxz:"Z3061DebitoCredito",gxold:"O3061DebitoCredito",gxvar:"A3061DebitoCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3061DebitoCredito=Value},v2z:function(Value){gx.O.Z3061DebitoCredito=Value},v2c:function(row){gx.fn.setGridComboBoxValue("DEBITOCREDITO",row || gx.fn.currentGridRowImpl(57),gx.O.A3061DebitoCredito)},c2v:function(){gx.O.A3061DebitoCredito=this.val()},val:function(row){return gx.fn.getGridControlValue("DEBITOCREDITO",row || gx.fn.currentGridRowImpl(57))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(57),gx.O.AV7bmpAlt,gx.O.AV110Bmpalt_GXI)},c2v:function(){gx.O.AV110Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV110Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(57),gx.O.AV8bmpExc,gx.O.AV111Bmpexc_GXI)},c2v:function(){gx.O.AV111Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV111Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:57,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(57),gx.O.AV16bmpCon,gx.O.AV112Bmpcon_GXI)},c2v:function(){gx.O.AV112Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(57))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(57))}, gxvar_GXI:'AV112Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[76]={fld:"TABLE8",grid:0};
   GXValidFnc[80]={fld:"TABLE9",grid:0};
   GXValidFnc[83]={fld:"IMAGE6",grid:0};
   GXValidFnc[85]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[87]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[89]={fld:"IMAGE1",grid:0};
   GXValidFnc[90]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAEMPRESAID",gxz:"ZV104PessoaEmpresaId",gxold:"OV104PessoaEmpresaId",gxvar:"AV104PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV104PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV104PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV104PessoaEmpresaId,0)},c2v:function(){gx.O.AV104PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEBITOREFERENCIAINTERVALO2",gxz:"ZV71DebitoReferenciaIntervalo2",gxold:"OV71DebitoReferenciaIntervalo2",gxvar:"AV71DebitoReferenciaIntervalo2",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71DebitoReferenciaIntervalo2=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV71DebitoReferenciaIntervalo2=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDEBITOREFERENCIAINTERVALO2",gx.O.AV71DebitoReferenciaIntervalo2,0)},c2v:function(){gx.O.AV71DebitoReferenciaIntervalo2=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDEBITOREFERENCIAINTERVALO2")},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEBITOREFERENCIAINTERVALO1",gxz:"ZV69DebitoReferenciaIntervalo1",gxold:"OV69DebitoReferenciaIntervalo1",gxvar:"AV69DebitoReferenciaIntervalo1",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69DebitoReferenciaIntervalo1=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV69DebitoReferenciaIntervalo1=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDEBITOREFERENCIAINTERVALO1",gx.O.AV69DebitoReferenciaIntervalo1,0)},c2v:function(){gx.O.AV69DebitoReferenciaIntervalo1=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDEBITOREFERENCIAINTERVALO1")},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[96]={fld:"JSJSON", format:2,grid:0};
   GXValidFnc[97]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[99]={fld:"BTNHELP",grid:0};
   GXValidFnc[100]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV70PessoaId = 0 ;
   this.ZV70PessoaId = 0 ;
   this.OV70PessoaId = 0 ;
   this.AV85PessoaRazaoSocial2 = "" ;
   this.ZV85PessoaRazaoSocial2 = "" ;
   this.OV85PessoaRazaoSocial2 = "" ;
   this.AV86MesInicial = 0 ;
   this.ZV86MesInicial = 0 ;
   this.OV86MesInicial = 0 ;
   this.AV88AnoInicial = 0 ;
   this.ZV88AnoInicial = 0 ;
   this.OV88AnoInicial = 0 ;
   this.AV87MesFinal = 0 ;
   this.ZV87MesFinal = 0 ;
   this.OV87MesFinal = 0 ;
   this.AV89AnoFinal = 0 ;
   this.ZV89AnoFinal = 0 ;
   this.OV89AnoFinal = 0 ;
   this.AV73DebitoCredito = "" ;
   this.ZV73DebitoCredito = "" ;
   this.OV73DebitoCredito = "" ;
   this.AV74DebitoTipo = "" ;
   this.ZV74DebitoTipo = "" ;
   this.OV74DebitoTipo = "" ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.ZV84PessoaRazaoSocial = "" ;
   this.OV84PessoaRazaoSocial = "" ;
   this.ZV72DebitoReferencia = "" ;
   this.OV72DebitoReferencia = "" ;
   this.Z3057DebitoReferencia = gx.date.nullDate() ;
   this.O3057DebitoReferencia = gx.date.nullDate() ;
   this.Z3058DebitoSequencia = 0 ;
   this.O3058DebitoSequencia = 0 ;
   this.Z3060DebitoTipo = "" ;
   this.O3060DebitoTipo = "" ;
   this.ZV83DebitoDescricao = "" ;
   this.OV83DebitoDescricao = "" ;
   this.Z3059DebitoDescricao = "" ;
   this.O3059DebitoDescricao = "" ;
   this.Z3062DebitoValor = 0 ;
   this.O3062DebitoValor = 0 ;
   this.Z3061DebitoCredito = "" ;
   this.O3061DebitoCredito = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV104PessoaEmpresaId = "" ;
   this.ZV104PessoaEmpresaId = "" ;
   this.OV104PessoaEmpresaId = "" ;
   this.AV71DebitoReferenciaIntervalo2 = gx.date.nullDate() ;
   this.ZV71DebitoReferenciaIntervalo2 = gx.date.nullDate() ;
   this.OV71DebitoReferenciaIntervalo2 = gx.date.nullDate() ;
   this.AV69DebitoReferenciaIntervalo1 = gx.date.nullDate() ;
   this.ZV69DebitoReferenciaIntervalo1 = gx.date.nullDate() ;
   this.OV69DebitoReferenciaIntervalo1 = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV70PessoaId = 0 ;
   this.AV85PessoaRazaoSocial2 = "" ;
   this.AV86MesInicial = 0 ;
   this.AV88AnoInicial = 0 ;
   this.AV87MesFinal = 0 ;
   this.AV89AnoFinal = 0 ;
   this.AV73DebitoCredito = "" ;
   this.AV74DebitoTipo = "" ;
   this.AV104PessoaEmpresaId = "" ;
   this.AV71DebitoReferenciaIntervalo2 = gx.date.nullDate() ;
   this.AV69DebitoReferenciaIntervalo1 = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV11OrderedBy = 0 ;
   this.A70PessoaRazaoSocial = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.AV84PessoaRazaoSocial = "" ;
   this.AV72DebitoReferencia = "" ;
   this.A3057DebitoReferencia = gx.date.nullDate() ;
   this.A3058DebitoSequencia = 0 ;
   this.A3060DebitoTipo = "" ;
   this.AV83DebitoDescricao = "" ;
   this.A3059DebitoDescricao = "" ;
   this.A3062DebitoValor = 0 ;
   this.A3061DebitoCredito = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV105SnRecuperaFiltro = "" ;
   this.AV108Pgmname = "" ;
   this.Events = {"e11kb2_client": ["'GXM_PREVIOUS'", true] ,"e12kb2_client": ["'GXM_NEXT'", true] ,"e14kb2_client": ["'NOVO'", true] ,"e15kb2_client": ["ENTER", true] ,"e19kb2_client": ["'ALTERAR'", true] ,"e20kb2_client": ["'EXCLUIR'", true] ,"e21kb2_client": ["'CONSULTAR'", true] ,"e13kb2_client": ["'FECHAR'", true] ,"e22kb2_client": ["'ATUALIZAPAGINA'", true] ,"e23kb2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV70PessoaId',fld:'vPESSOAID'},{av:'AV73DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV74DebitoTipo',fld:'vDEBITOTIPO'},{av:'AV104PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV71DebitoReferenciaIntervalo2',fld:'vDEBITOREFERENCIAINTERVALO2'},{av:'AV69DebitoReferenciaIntervalo1',fld:'vDEBITOREFERENCIAINTERVALO1'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV105SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV108Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3059DebitoDescricao',fld:'DEBITODESCRICAO'},{av:'A3057DebitoReferencia',fld:'DEBITOREFERENCIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'}],[]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV70PessoaId',fld:'vPESSOAID'},{av:'AV73DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV74DebitoTipo',fld:'vDEBITOTIPO'},{av:'AV104PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV71DebitoReferenciaIntervalo2',fld:'vDEBITOREFERENCIAINTERVALO2'},{av:'AV69DebitoReferenciaIntervalo1',fld:'vDEBITOREFERENCIAINTERVALO1'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV105SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV108Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3059DebitoDescricao',fld:'DEBITODESCRICAO'},{av:'A3057DebitoReferencia',fld:'DEBITOREFERENCIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV70PessoaId',fld:'vPESSOAID'},{av:'AV73DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV74DebitoTipo',fld:'vDEBITOTIPO'},{av:'AV104PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV71DebitoReferenciaIntervalo2',fld:'vDEBITOREFERENCIAINTERVALO2'},{av:'AV69DebitoReferenciaIntervalo1',fld:'vDEBITOREFERENCIAINTERVALO1'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV105SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV108Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3059DebitoDescricao',fld:'DEBITODESCRICAO'},{av:'A3057DebitoReferencia',fld:'DEBITOREFERENCIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV70PessoaId',fld:'vPESSOAID'},{av:'AV73DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV74DebitoTipo',fld:'vDEBITOTIPO'},{av:'AV104PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV71DebitoReferenciaIntervalo2',fld:'vDEBITOREFERENCIAINTERVALO2'},{av:'AV69DebitoReferenciaIntervalo1',fld:'vDEBITOREFERENCIAINTERVALO1'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV105SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV108Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3059DebitoDescricao',fld:'DEBITODESCRICAO'},{av:'A3057DebitoReferencia',fld:'DEBITOREFERENCIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'}],[{ctrl:'PESSOAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOAID","Title")',ctrl:'PESSOAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV105SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV81filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV70PessoaId',fld:'vPESSOAID'},{av:'AV85PessoaRazaoSocial2',fld:'vPESSOARAZAOSOCIAL2'},{av:'AV86MesInicial',fld:'vMESINICIAL'},{av:'AV88AnoInicial',fld:'vANOINICIAL'},{av:'AV87MesFinal',fld:'vMESFINAL'},{av:'AV89AnoFinal',fld:'vANOFINAL'},{av:'AV69DebitoReferenciaIntervalo1',fld:'vDEBITOREFERENCIAINTERVALO1'},{av:'AV71DebitoReferenciaIntervalo2',fld:'vDEBITOREFERENCIAINTERVALO2'},{av:'AV73DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV74DebitoTipo',fld:'vDEBITOTIPO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3059DebitoDescricao',fld:'DEBITODESCRICAO'},{av:'A3057DebitoReferencia',fld:'DEBITOREFERENCIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'}],[{av:'AV83DebitoDescricao',fld:'vDEBITODESCRICAO'},{av:'AV72DebitoReferencia',fld:'vDEBITOREFERENCIA'},{av:'AV84PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV82DataNula',fld:'vDATANULA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV70PessoaId',fld:'vPESSOAID'},{av:'AV85PessoaRazaoSocial2',fld:'vPESSOARAZAOSOCIAL2'},{av:'AV86MesInicial',fld:'vMESINICIAL'},{av:'AV88AnoInicial',fld:'vANOINICIAL'},{av:'AV87MesFinal',fld:'vMESFINAL'},{av:'AV89AnoFinal',fld:'vANOFINAL'},{av:'AV69DebitoReferenciaIntervalo1',fld:'vDEBITOREFERENCIAINTERVALO1'},{av:'AV71DebitoReferenciaIntervalo2',fld:'vDEBITOREFERENCIAINTERVALO2'},{av:'AV73DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV74DebitoTipo',fld:'vDEBITOTIPO'},{av:'AV108Pgmname',fld:'vPGMNAME'}],[{av:'AV82DataNula',fld:'vDATANULA'},{av:'AV81filtros',fld:'vFILTROS'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV70PessoaId',fld:'vPESSOAID'},{av:'AV73DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV74DebitoTipo',fld:'vDEBITOTIPO'},{av:'AV104PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV71DebitoReferenciaIntervalo2',fld:'vDEBITOREFERENCIAINTERVALO2'},{av:'AV69DebitoReferenciaIntervalo1',fld:'vDEBITOREFERENCIAINTERVALO1'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV105SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV108Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3059DebitoDescricao',fld:'DEBITODESCRICAO'},{av:'A3057DebitoReferencia',fld:'DEBITOREFERENCIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'},{av:'AV86MesInicial',fld:'vMESINICIAL'},{av:'AV88AnoInicial',fld:'vANOINICIAL'},{av:'AV87MesFinal',fld:'vMESFINAL'},{av:'AV89AnoFinal',fld:'vANOFINAL'},{av:'AV103SnErro',fld:'vSNERRO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'}],[{av:'AV69DebitoReferenciaIntervalo1',fld:'vDEBITOREFERENCIAINTERVALO1'},{av:'AV71DebitoReferenciaIntervalo2',fld:'vDEBITOREFERENCIAINTERVALO2'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV103SnErro',fld:'vSNERRO'},{av:'AV113GXLvl258',fld:'vGXLVL258'},{av:'AV90Referencia1',fld:'vREFERENCIA1'},{av:'AV91Referencia2',fld:'vREFERENCIA2'},{av:'AV87MesFinal',fld:'vMESFINAL'},{av:'AV89AnoFinal',fld:'vANOFINAL'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'A3057DebitoReferencia',fld:'DEBITOREFERENCIA'},{av:'A3058DebitoSequencia',fld:'DEBITOSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV70PessoaId',fld:'vPESSOAID'},{av:'AV85PessoaRazaoSocial2',fld:'vPESSOARAZAOSOCIAL2'},{av:'AV86MesInicial',fld:'vMESINICIAL'},{av:'AV88AnoInicial',fld:'vANOINICIAL'},{av:'AV87MesFinal',fld:'vMESFINAL'},{av:'AV89AnoFinal',fld:'vANOFINAL'},{av:'AV69DebitoReferenciaIntervalo1',fld:'vDEBITOREFERENCIAINTERVALO1'},{av:'AV71DebitoReferenciaIntervalo2',fld:'vDEBITOREFERENCIAINTERVALO2'},{av:'AV73DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV74DebitoTipo',fld:'vDEBITOTIPO'},{av:'AV108Pgmname',fld:'vPGMNAME'}],[{av:'A3058DebitoSequencia',fld:'DEBITOSEQUENCIA'},{av:'A3057DebitoReferencia',fld:'DEBITOREFERENCIA'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV81filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'A3057DebitoReferencia',fld:'DEBITOREFERENCIA'},{av:'A3058DebitoSequencia',fld:'DEBITOSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV70PessoaId',fld:'vPESSOAID'},{av:'AV85PessoaRazaoSocial2',fld:'vPESSOARAZAOSOCIAL2'},{av:'AV86MesInicial',fld:'vMESINICIAL'},{av:'AV88AnoInicial',fld:'vANOINICIAL'},{av:'AV87MesFinal',fld:'vMESFINAL'},{av:'AV89AnoFinal',fld:'vANOFINAL'},{av:'AV69DebitoReferenciaIntervalo1',fld:'vDEBITOREFERENCIAINTERVALO1'},{av:'AV71DebitoReferenciaIntervalo2',fld:'vDEBITOREFERENCIAINTERVALO2'},{av:'AV73DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV74DebitoTipo',fld:'vDEBITOTIPO'},{av:'AV108Pgmname',fld:'vPGMNAME'}],[{av:'A3058DebitoSequencia',fld:'DEBITOSEQUENCIA'},{av:'A3057DebitoReferencia',fld:'DEBITOREFERENCIA'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV81filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A69PessoaId',fld:'PESSOAID'},{av:'A3057DebitoReferencia',fld:'DEBITOREFERENCIA'},{av:'A3058DebitoSequencia',fld:'DEBITOSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV70PessoaId',fld:'vPESSOAID'},{av:'AV85PessoaRazaoSocial2',fld:'vPESSOARAZAOSOCIAL2'},{av:'AV86MesInicial',fld:'vMESINICIAL'},{av:'AV88AnoInicial',fld:'vANOINICIAL'},{av:'AV87MesFinal',fld:'vMESFINAL'},{av:'AV89AnoFinal',fld:'vANOFINAL'},{av:'AV69DebitoReferenciaIntervalo1',fld:'vDEBITOREFERENCIAINTERVALO1'},{av:'AV71DebitoReferenciaIntervalo2',fld:'vDEBITOREFERENCIAINTERVALO2'},{av:'AV73DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV74DebitoTipo',fld:'vDEBITOTIPO'},{av:'AV108Pgmname',fld:'vPGMNAME'}],[{av:'A3058DebitoSequencia',fld:'DEBITOSEQUENCIA'},{av:'A3057DebitoReferencia',fld:'DEBITOREFERENCIA'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV81filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV108Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV70PessoaId',fld:'vPESSOAID'},{av:'AV73DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV74DebitoTipo',fld:'vDEBITOTIPO'},{av:'AV104PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV71DebitoReferenciaIntervalo2',fld:'vDEBITOREFERENCIAINTERVALO2'},{av:'AV69DebitoReferenciaIntervalo1',fld:'vDEBITOREFERENCIAINTERVALO1'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV105SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV108Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A3059DebitoDescricao',fld:'DEBITODESCRICAO'},{av:'A3057DebitoReferencia',fld:'DEBITOREFERENCIA'},{av:'A70PessoaRazaoSocial',fld:'PESSOARAZAOSOCIAL'}],[]];
   this.setPrompt("PROMPT_PESSOAID", [13]);
   this.EnterCtrl = ["BUTTON2"];
   this.setVCMap("AV105SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV108Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   this.setVCMap("AV105SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV108Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A70PessoaRazaoSocial", "PESSOARAZAOSOCIAL", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar(this.GXValidFnc[50]);
   GridContainer.addRefreshingVar(this.GXValidFnc[90]);
   GridContainer.addRefreshingVar(this.GXValidFnc[91]);
   GridContainer.addRefreshingVar(this.GXValidFnc[92]);
   GridContainer.addRefreshingVar(this.GXValidFnc[97]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV105SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV108Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[93]);
   GridContainer.addRefreshingVar({rfrVar:"A3059DebitoDescricao", rfrProp:"Value", gxAttId:"3059"});
   GridContainer.addRefreshingVar({rfrVar:"A3057DebitoReferencia", rfrProp:"Value", gxAttId:"3057"});
   GridContainer.addRefreshingVar({rfrVar:"A70PessoaRazaoSocial"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacadastrodebito());
