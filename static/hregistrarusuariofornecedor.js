/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:32.50
*/
gx.evt.autoSkip = false;
gx.define('hregistrarusuariofornecedor', false, function () {
   this.ServerClass =  "hregistrarusuariofornecedor" ;
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
      this.AV31PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
      this.AV27PessoaEmail=gx.fn.getControlValue("vPESSOAEMAIL") ;
   };
   this.s112_client=function()
   {
      if ( this.AV38Tipo == "UPD" )
      {
         if ( (""==this.AV28PessoaEmailAlt) )
         {
            this.addMessage("Informe o email");
            gx.fn.usrSetFocus("vPESSOAEMAILALT") ;
            this.AV36SnErro =  "S"  ;
         }
         if ( this.AV36SnErro == "N" )
         {
            if ( (""==this.AV41UsuarioFornecedorSenhaBranco) )
            {
               this.addMessage("Informe a senha");
               gx.fn.usrSetFocus("vUSUARIOFORNECEDORSENHABRANCO") ;
               this.AV36SnErro =  "S"  ;
            }
         }
      }
      else
      {
         if ( (""==this.AV29PessoaEmailIns) )
         {
            this.addMessage("Informe o email");
            gx.fn.usrSetFocus("vPESSOAEMAILINS") ;
            this.AV36SnErro =  "S"  ;
         }
      }
   };
   this.e1327l2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1427l2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1527l2_client=function()
   {
      this.executeServerEvent("'ZERARSENHA'", false, null, false, false);
   };
   this.e1627l2_client=function()
   {
      this.executeServerEvent("'UPLOAD'", true, null, false, false);
   };
   this.e1827l2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,13,15,18,20,26,27,30,35,37,40,42,45,47,50,54,57,60,68,69,70,71,72];
   this.GXLastCtrlId =72;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAEMAILINS",gxz:"ZV29PessoaEmailIns",gxold:"OV29PessoaEmailIns",gxvar:"AV29PessoaEmailIns",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PessoaEmailIns=Value},v2z:function(Value){gx.O.ZV29PessoaEmailIns=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMAILINS",gx.O.AV29PessoaEmailIns,0)},c2v:function(){gx.O.AV29PessoaEmailIns=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMAILINS")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOFORNECEDORCODIGO",gxz:"ZV40UsuarioFornecedorCodigo",gxold:"OV40UsuarioFornecedorCodigo",gxvar:"AV40UsuarioFornecedorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40UsuarioFornecedorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40UsuarioFornecedorCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUSUARIOFORNECEDORCODIGO",gx.O.AV40UsuarioFornecedorCodigo,0)},c2v:function(){gx.O.AV40UsuarioFornecedorCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUSUARIOFORNECEDORCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOFORNECEDORCODIGO",gxz:"ZV40UsuarioFornecedorCodigo",gxold:"OV40UsuarioFornecedorCodigo",gxvar:"AV40UsuarioFornecedorCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40UsuarioFornecedorCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40UsuarioFornecedorCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUSUARIOFORNECEDORCODIGO",gx.O.AV40UsuarioFornecedorCodigo,0)},c2v:function(){gx.O.AV40UsuarioFornecedorCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUSUARIOFORNECEDORCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAEMAILALT",gxz:"ZV28PessoaEmailAlt",gxold:"OV28PessoaEmailAlt",gxvar:"AV28PessoaEmailAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PessoaEmailAlt=Value},v2z:function(Value){gx.O.ZV28PessoaEmailAlt=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMAILALT",gx.O.AV28PessoaEmailAlt,0)},c2v:function(){gx.O.AV28PessoaEmailAlt=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMAILALT")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[47]={fld:"TABLE5",grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:15,dec:0,sign:false,isPwd:true,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOFORNECEDORSENHABRANCO",gxz:"ZV41UsuarioFornecedorSenhaBranco",gxold:"OV41UsuarioFornecedorSenhaBranco",gxvar:"AV41UsuarioFornecedorSenhaBranco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41UsuarioFornecedorSenhaBranco=Value},v2z:function(Value){gx.O.ZV41UsuarioFornecedorSenhaBranco=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOFORNECEDORSENHABRANCO",gx.O.AV41UsuarioFornecedorSenhaBranco,0)},c2v:function(){gx.O.AV41UsuarioFornecedorSenhaBranco=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOFORNECEDORSENHABRANCO")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLE3",grid:0};
   GXValidFnc[57]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIMAGEM",gxz:"ZV19Imagem",gxold:"OV19Imagem",gxvar:"AV19Imagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Imagem=Value},v2z:function(Value){gx.O.ZV19Imagem=Value},v2c:function(){gx.fn.setMultimediaValue("vIMAGEM",gx.O.AV19Imagem,gx.O.AV51Imagem_GXI)},c2v:function(){gx.O.AV51Imagem_GXI=this.val_GXI();gx.O.AV19Imagem=this.val()},val:function(){return gx.fn.getBlobValue("vIMAGEM")},val_GXI:function(){return gx.fn.getControlValue("vIMAGEM_GXI")}, gxvar_GXI:'AV51Imagem_GXI',nac:gx.falseFn};
   GXValidFnc[60]={fld:"TXTCARREGARIMG", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV38Tipo",gxold:"OV38Tipo",gxvar:"AV38Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38Tipo=Value},v2z:function(Value){gx.O.ZV38Tipo=Value},v2c:function(){gx.fn.setControlValue("vTIPO",gx.O.AV38Tipo,0)},c2v:function(){gx.O.AV38Tipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPO")},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAVE",gxz:"ZV7Chave",gxold:"OV7Chave",gxvar:"AV7Chave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7Chave=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7Chave=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCHAVE",gx.O.AV7Chave,0)},c2v:function(){gx.O.AV7Chave=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCHAVE",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPATHAUX",gxz:"ZV26PathAux",gxold:"OV26PathAux",gxvar:"AV26PathAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26PathAux=Value},v2z:function(Value){gx.O.ZV26PathAux=Value},v2c:function(){gx.fn.setControlValue("vPATHAUX",gx.O.AV26PathAux,0)},c2v:function(){gx.O.AV26PathAux=this.val()},val:function(){return gx.fn.getControlValue("vPATHAUX")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPATH2",gxz:"ZV25Path2",gxold:"OV25Path2",gxvar:"AV25Path2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Path2=Value},v2z:function(Value){gx.O.ZV25Path2=Value},v2c:function(){gx.fn.setControlValue("vPATH2",gx.O.AV25Path2,0)},c2v:function(){gx.O.AV25Path2=this.val()},val:function(){return gx.fn.getControlValue("vPATH2")},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPATH3",gxz:"ZV42Path3",gxold:"OV42Path3",gxvar:"AV42Path3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42Path3=Value},v2z:function(Value){gx.O.ZV42Path3=Value},v2c:function(){gx.fn.setControlValue("vPATH3",gx.O.AV42Path3,0)},c2v:function(){gx.O.AV42Path3=this.val()},val:function(){return gx.fn.getControlValue("vPATH3")},nac:gx.falseFn};
   this.AV29PessoaEmailIns = "" ;
   this.ZV29PessoaEmailIns = "" ;
   this.OV29PessoaEmailIns = "" ;
   this.AV40UsuarioFornecedorCodigo = 0 ;
   this.ZV40UsuarioFornecedorCodigo = 0 ;
   this.OV40UsuarioFornecedorCodigo = 0 ;
   this.AV28PessoaEmailAlt = "" ;
   this.ZV28PessoaEmailAlt = "" ;
   this.OV28PessoaEmailAlt = "" ;
   this.AV41UsuarioFornecedorSenhaBranco = "" ;
   this.ZV41UsuarioFornecedorSenhaBranco = "" ;
   this.OV41UsuarioFornecedorSenhaBranco = "" ;
   this.AV51Imagem_GXI = "" ;
   this.AV19Imagem = "" ;
   this.ZV19Imagem = "" ;
   this.OV19Imagem = "" ;
   this.AV38Tipo = "" ;
   this.ZV38Tipo = "" ;
   this.OV38Tipo = "" ;
   this.AV7Chave = 0 ;
   this.ZV7Chave = 0 ;
   this.OV7Chave = 0 ;
   this.AV26PathAux = "" ;
   this.ZV26PathAux = "" ;
   this.OV26PathAux = "" ;
   this.AV25Path2 = "" ;
   this.ZV25Path2 = "" ;
   this.OV25Path2 = "" ;
   this.AV42Path3 = "" ;
   this.ZV42Path3 = "" ;
   this.OV42Path3 = "" ;
   this.AV29PessoaEmailIns = "" ;
   this.AV40UsuarioFornecedorCodigo = 0 ;
   this.AV28PessoaEmailAlt = "" ;
   this.AV41UsuarioFornecedorSenhaBranco = "" ;
   this.AV19Imagem = "" ;
   this.AV38Tipo = "" ;
   this.AV7Chave = 0 ;
   this.AV26PathAux = "" ;
   this.AV25Path2 = "" ;
   this.AV42Path3 = "" ;
   this.AV31PessoaId = 0 ;
   this.AV27PessoaEmail = "" ;
   this.A10559UsuarioFornecedorEmpresa = "" ;
   this.A10562UsuarioFornecedorPessoaId = 0 ;
   this.A10561UsuarioFornecedorSenhaBranco = "" ;
   this.A10558UsuarioFornecedorCodigo = 0 ;
   this.AV36SnErro = "" ;
   this.Events = {"e1327l2_client": ["'FECHAR'", true] ,"e1427l2_client": ["ENTER", true] ,"e1527l2_client": ["'ZERARSENHA'", true] ,"e1627l2_client": ["'UPLOAD'", true] ,"e1827l2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV42Path3',fld:'vPATH3'},{av:'AV12EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'this.AV17http.Serverhost',ctrl:'vHTTP',prop:'Serverhost'},{av:'this.AV17http.Serverport',ctrl:'vHTTP',prop:'Serverport'}],[{av:'AV7Chave',fld:'vCHAVE'},{av:'AV11DiretorioFile',fld:'vDIRETORIOFILE'},{av:'AV32Posicao',fld:'vPOSICAO'},{av:'AV42Path3',fld:'vPATH3'},{av:'AV6CaminhoNovo',fld:'vCAMINHONOVO'},{av:'AV10Diretorio',fld:'vDIRETORIO'},{av:'AV19Imagem',fld:'vIMAGEM'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV26PathAux',fld:'vPATHAUX'},{av:'AV42Path3',fld:'vPATH3'},{av:'AV27PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV31PessoaId',fld:'vPESSOAID'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV38Tipo',fld:'vTIPO'},{av:'AV28PessoaEmailAlt',fld:'vPESSOAEMAILALT'},{av:'AV29PessoaEmailIns',fld:'vPESSOAEMAILINS'},{av:'AV31PessoaId',fld:'vPESSOAID'},{av:'AV40UsuarioFornecedorCodigo',fld:'vUSUARIOFORNECEDORCODIGO'},{av:'AV41UsuarioFornecedorSenhaBranco',fld:'vUSUARIOFORNECEDORSENHABRANCO'},{av:'AV25Path2',fld:'vPATH2'},{av:'AV26PathAux',fld:'vPATHAUX'},{av:'AV27PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV36SnErro',fld:'vSNERRO'}],[{av:'AV36SnErro',fld:'vSNERRO'},{av:'AV30PessoaEmailTela',fld:'vPESSOAEMAILTELA'},{av:'AV38Tipo',fld:'vTIPO'},{av:'AV41UsuarioFornecedorSenhaBranco',fld:'vUSUARIOFORNECEDORSENHABRANCO'},{av:'AV40UsuarioFornecedorCodigo',fld:'vUSUARIOFORNECEDORCODIGO'},{av:'AV31PessoaId',fld:'vPESSOAID'}]];
   this.EvtParms["'ZERARSENHA'"] = [[{av:'AV33Senha',fld:'vSENHA'}],[{av:'AV33Senha',fld:'vSENHA'},{av:'AV41UsuarioFornecedorSenhaBranco',fld:'vUSUARIOFORNECEDORSENHABRANCO'}]];
   this.EvtParms["'UPLOAD'"] = [[],[{av:'AV10Diretorio',fld:'vDIRETORIO'},{av:'AV32Posicao',fld:'vPOSICAO'},{av:'AV44isCloud',fld:'vISCLOUD'}]];
   this.EnterCtrl = ["BUTTON2"];
   this.setVCMap("AV31PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("AV27PessoaEmail", "vPESSOAEMAIL", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarusuariofornecedor());
