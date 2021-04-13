/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:24.15
*/
gx.evt.autoSkip = false;
gx.define('hdirf', false, function () {
   this.ServerClass =  "hdirf" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Dirfanoretencao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDIRFANORETENCAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s152_client=function()
   {
      this.AV126DirfRendimentoJan =  0  ;
      this.AV125DirfRendimentoFev =  0  ;
      this.AV130DirfRendimentoMar =  0  ;
      this.AV122DirfRendimentoAbr =  0  ;
      this.AV129DirfRendimentoMai =  0  ;
      this.AV128DirfRendimentoJun =  0  ;
      this.AV127DirfRendimentoJul =  0  ;
      this.AV123DirfRendimentoAgo =  0  ;
      this.AV133DirfRendimentoSet =  0  ;
      this.AV132DirfRendimentoOut =  0  ;
      this.AV131DirfRendimentoNov =  0  ;
      this.AV124DirfRendimentoDez =  0  ;
      this.AV134DirfRendimento13 =  0  ;
      this.AV67DirfRendimentoTotalAnual =  0  ;
      this.AV114DirfPrevOficialJan =  0  ;
      this.AV113DirfPrevOficialFev =  0  ;
      this.AV118DirfPrevOficialMar =  0  ;
      this.AV110DirfPrevOficialAbr =  0  ;
      this.AV117DirfPrevOficialMai =  0  ;
      this.AV116DirfPrevOficialJun =  0  ;
      this.AV115DirfPrevOficialJul =  0  ;
      this.AV111DirfPrevOficialAgo =  0  ;
      this.AV121DirfPrevOficialSet =  0  ;
      this.AV120DirfPrevOficialOut =  0  ;
      this.AV119DirfPrevOficialNov =  0  ;
      this.AV112DirfPrevOficialDez =  0  ;
      this.AV136DirfPrevOficial13 =  0  ;
      this.AV68DirfPrevOficialTotalAnual =  0  ;
      this.AV102DirfImpRetidoJan =  0  ;
      this.AV101DirfImpRetidoFev =  0  ;
      this.AV106DirfImpRetidoMar =  0  ;
      this.AV98DirfImpRetidoAbr =  0  ;
      this.AV105DirfImpRetidoMai =  0  ;
      this.AV104DirfImpRetidoJun =  0  ;
      this.AV103DirfImpRetidoJul =  0  ;
      this.AV99DirfImpRetidoAgo =  0  ;
      this.AV109DirfImpRetidoSet =  0  ;
      this.AV108DirfImpRetidoOut =  0  ;
      this.AV107DirfImpRetidoNov =  0  ;
      this.AV100DirfImpRetidoDez =  0  ;
      this.AV135DirfImpRetido13 =  0  ;
      this.AV69DirfImpRetidoTotalAnual =  0  ;
   };
   this.s142_client=function()
   {
      this.AV70SnErro =  "N"  ;
      this.AV96DirfEmpresaId =  ""  ;
      if ( (0==this.AV74DirfAnoRetencao) )
      {
         this.addMessage("Informe o Ano de Retenção");
         gx.fn.usrSetFocus("vDIRFANORETENCAO") ;
         this.AV70SnErro =  "S"  ;
      }
      else
      {
         if ( (0==this.AV75RetencaoCodigo) )
         {
            this.addMessage("Informe o Código");
            gx.fn.usrSetFocus("vRETENCAOCODIGO") ;
            this.AV70SnErro =  "S"  ;
         }
         else
         {
            if ( (""==this.AV72DirfCPF) && (""==this.AV73DirfCNPJ) )
            {
               this.addMessage("Informe o CPF ou CNPJ");
               gx.fn.usrSetFocus("vDIRFCPF") ;
               this.AV70SnErro =  "S"  ;
            }
            else
            {
               if ( ! (""==this.AV72DirfCPF) && ! (""==this.AV73DirfCNPJ) )
               {
                  this.addMessage("Não é permitido informar o CPF e o CNPJ ao mesmo tempo");
                  this.AV70SnErro =  "S"  ;
               }
               else
               {
                  if ( ! (""==this.AV72DirfCPF) )
                  {
                     this.AV97DirfCPFCNPJ =  this.AV72DirfCPF  ;
                  }
                  else
                  {
                     this.AV97DirfCPFCNPJ =  this.AV73DirfCNPJ  ;
                  }
               }
            }
         }
      }
   };
   this.e11jw2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13jw2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14jw2_client=function()
   {
      this.executeServerEvent("'ABRIRCONTASDIRF'", false, null, false, false);
   };
   this.e15jw2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", false, null, false, false);
   };
   this.e16jw2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", false, null, false, false);
   };
   this.e18jw2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,17,19,22,24,25,28,30,31,34,36,37,44,48,50,52,54,57,59,61,63,65,68,70,72,74,76,79,81,83,85,87,90,92,94,96,98,101,103,105,107,109,112,114,116,118,120,123,125,127,129,131,134,136,138,140,142,145,147,149,151,153,156,158,160,162,164,167,169,171,173,175,178,180,182,184,186,189,191,193,195,197,200,202,204,206,208,214,222,223,225,226];
   this.GXLastCtrlId =226;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE7",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TABLE9",grid:0};
   GXValidFnc[14]={fld:"TABLE10",grid:0};
   GXValidFnc[17]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Dirfanoretencao,isvalid:null,rgrid:[],fld:"vDIRFANORETENCAO",gxz:"ZV74DirfAnoRetencao",gxold:"OV74DirfAnoRetencao",gxvar:"AV74DirfAnoRetencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74DirfAnoRetencao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV74DirfAnoRetencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIRFANORETENCAO",gx.O.AV74DirfAnoRetencao,0)},c2v:function(){gx.O.AV74DirfAnoRetencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIRFANORETENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRETENCAOCODIGO",gxz:"ZV75RetencaoCodigo",gxold:"OV75RetencaoCodigo",gxvar:"AV75RetencaoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75RetencaoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV75RetencaoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vRETENCAOCODIGO",gx.O.AV75RetencaoCodigo,0)},c2v:function(){gx.O.AV75RetencaoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vRETENCAOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRETENCAODESCRICAO",gxz:"ZV91RetencaoDescricao",gxold:"OV91RetencaoDescricao",gxvar:"AV91RetencaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91RetencaoDescricao=Value},v2z:function(Value){gx.O.ZV91RetencaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vRETENCAODESCRICAO",gx.O.AV91RetencaoDescricao,0)},c2v:function(){gx.O.AV91RetencaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vRETENCAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFCPF",gxz:"ZV72DirfCPF",gxold:"OV72DirfCPF",gxvar:"AV72DirfCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72DirfCPF=Value},v2z:function(Value){gx.O.ZV72DirfCPF=Value},v2c:function(){gx.fn.setControlValue("vDIRFCPF",gx.O.AV72DirfCPF,0)},c2v:function(){gx.O.AV72DirfCPF=this.val()},val:function(){return gx.fn.getControlValue("vDIRFCPF")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFNOME",gxz:"ZV90DirfNome",gxold:"OV90DirfNome",gxvar:"AV90DirfNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90DirfNome=Value},v2z:function(Value){gx.O.ZV90DirfNome=Value},v2c:function(){gx.fn.setControlValue("vDIRFNOME",gx.O.AV90DirfNome,0)},c2v:function(){gx.O.AV90DirfNome=this.val()},val:function(){return gx.fn.getControlValue("vDIRFNOME")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFCNPJ",gxz:"ZV73DirfCNPJ",gxold:"OV73DirfCNPJ",gxvar:"AV73DirfCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73DirfCNPJ=Value},v2z:function(Value){gx.O.ZV73DirfCNPJ=Value},v2c:function(){gx.fn.setControlValue("vDIRFCNPJ",gx.O.AV73DirfCNPJ,0)},c2v:function(){gx.O.AV73DirfCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vDIRFCNPJ")},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFNOME2",gxz:"ZV87DirfNome2",gxold:"OV87DirfNome2",gxvar:"AV87DirfNome2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87DirfNome2=Value},v2z:function(Value){gx.O.ZV87DirfNome2=Value},v2c:function(){gx.fn.setControlValue("vDIRFNOME2",gx.O.AV87DirfNome2,0)},c2v:function(){gx.O.AV87DirfNome2=this.val()},val:function(){return gx.fn.getControlValue("vDIRFNOME2")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLE6",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFRENDIMENTOJAN",gxz:"ZV126DirfRendimentoJan",gxold:"OV126DirfRendimentoJan",gxvar:"AV126DirfRendimentoJan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV126DirfRendimentoJan=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV126DirfRendimentoJan=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFRENDIMENTOJAN",gx.O.AV126DirfRendimentoJan,2,',')},c2v:function(){gx.O.AV126DirfRendimentoJan=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFRENDIMENTOJAN",'.',',')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFPREVOFICIALJAN",gxz:"ZV114DirfPrevOficialJan",gxold:"OV114DirfPrevOficialJan",gxvar:"AV114DirfPrevOficialJan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV114DirfPrevOficialJan=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV114DirfPrevOficialJan=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFPREVOFICIALJAN",gx.O.AV114DirfPrevOficialJan,2,',')},c2v:function(){gx.O.AV114DirfPrevOficialJan=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFPREVOFICIALJAN",'.',',')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFIMPRETIDOJAN",gxz:"ZV102DirfImpRetidoJan",gxold:"OV102DirfImpRetidoJan",gxvar:"AV102DirfImpRetidoJan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV102DirfImpRetidoJan=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV102DirfImpRetidoJan=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFIMPRETIDOJAN",gx.O.AV102DirfImpRetidoJan,2,',')},c2v:function(){gx.O.AV102DirfImpRetidoJan=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFIMPRETIDOJAN",'.',',')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFDIARIASJAN",gxz:"ZV137DirfDiariasJan",gxold:"OV137DirfDiariasJan",gxvar:"AV137DirfDiariasJan",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV137DirfDiariasJan=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV137DirfDiariasJan=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFDIARIASJAN",gx.O.AV137DirfDiariasJan,2,',')},c2v:function(){gx.O.AV137DirfDiariasJan=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFDIARIASJAN",'.',',')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFRENDIMENTOFEV",gxz:"ZV125DirfRendimentoFev",gxold:"OV125DirfRendimentoFev",gxvar:"AV125DirfRendimentoFev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV125DirfRendimentoFev=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV125DirfRendimentoFev=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFRENDIMENTOFEV",gx.O.AV125DirfRendimentoFev,2,',')},c2v:function(){gx.O.AV125DirfRendimentoFev=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFRENDIMENTOFEV",'.',',')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFPREVOFICIALFEV",gxz:"ZV113DirfPrevOficialFev",gxold:"OV113DirfPrevOficialFev",gxvar:"AV113DirfPrevOficialFev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113DirfPrevOficialFev=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV113DirfPrevOficialFev=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFPREVOFICIALFEV",gx.O.AV113DirfPrevOficialFev,2,',')},c2v:function(){gx.O.AV113DirfPrevOficialFev=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFPREVOFICIALFEV",'.',',')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFIMPRETIDOFEV",gxz:"ZV101DirfImpRetidoFev",gxold:"OV101DirfImpRetidoFev",gxvar:"AV101DirfImpRetidoFev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101DirfImpRetidoFev=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV101DirfImpRetidoFev=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFIMPRETIDOFEV",gx.O.AV101DirfImpRetidoFev,2,',')},c2v:function(){gx.O.AV101DirfImpRetidoFev=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFIMPRETIDOFEV",'.',',')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFDIARIASFEV",gxz:"ZV138DirfDiariasFev",gxold:"OV138DirfDiariasFev",gxvar:"AV138DirfDiariasFev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV138DirfDiariasFev=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV138DirfDiariasFev=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFDIARIASFEV",gx.O.AV138DirfDiariasFev,2,',')},c2v:function(){gx.O.AV138DirfDiariasFev=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFDIARIASFEV",'.',',')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFRENDIMENTOMAR",gxz:"ZV130DirfRendimentoMar",gxold:"OV130DirfRendimentoMar",gxvar:"AV130DirfRendimentoMar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV130DirfRendimentoMar=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV130DirfRendimentoMar=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFRENDIMENTOMAR",gx.O.AV130DirfRendimentoMar,2,',')},c2v:function(){gx.O.AV130DirfRendimentoMar=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFRENDIMENTOMAR",'.',',')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFPREVOFICIALMAR",gxz:"ZV118DirfPrevOficialMar",gxold:"OV118DirfPrevOficialMar",gxvar:"AV118DirfPrevOficialMar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV118DirfPrevOficialMar=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV118DirfPrevOficialMar=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFPREVOFICIALMAR",gx.O.AV118DirfPrevOficialMar,2,',')},c2v:function(){gx.O.AV118DirfPrevOficialMar=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFPREVOFICIALMAR",'.',',')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFIMPRETIDOMAR",gxz:"ZV106DirfImpRetidoMar",gxold:"OV106DirfImpRetidoMar",gxvar:"AV106DirfImpRetidoMar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106DirfImpRetidoMar=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV106DirfImpRetidoMar=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFIMPRETIDOMAR",gx.O.AV106DirfImpRetidoMar,2,',')},c2v:function(){gx.O.AV106DirfImpRetidoMar=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFIMPRETIDOMAR",'.',',')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFDIARIASMAR",gxz:"ZV139DirfDiariasMar",gxold:"OV139DirfDiariasMar",gxvar:"AV139DirfDiariasMar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV139DirfDiariasMar=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV139DirfDiariasMar=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFDIARIASMAR",gx.O.AV139DirfDiariasMar,2,',')},c2v:function(){gx.O.AV139DirfDiariasMar=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFDIARIASMAR",'.',',')},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFRENDIMENTOABR",gxz:"ZV122DirfRendimentoAbr",gxold:"OV122DirfRendimentoAbr",gxvar:"AV122DirfRendimentoAbr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV122DirfRendimentoAbr=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV122DirfRendimentoAbr=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFRENDIMENTOABR",gx.O.AV122DirfRendimentoAbr,2,',')},c2v:function(){gx.O.AV122DirfRendimentoAbr=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFRENDIMENTOABR",'.',',')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFPREVOFICIALABR",gxz:"ZV110DirfPrevOficialAbr",gxold:"OV110DirfPrevOficialAbr",gxvar:"AV110DirfPrevOficialAbr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV110DirfPrevOficialAbr=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV110DirfPrevOficialAbr=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFPREVOFICIALABR",gx.O.AV110DirfPrevOficialAbr,2,',')},c2v:function(){gx.O.AV110DirfPrevOficialAbr=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFPREVOFICIALABR",'.',',')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFIMPRETIDOABR",gxz:"ZV98DirfImpRetidoAbr",gxold:"OV98DirfImpRetidoAbr",gxvar:"AV98DirfImpRetidoAbr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV98DirfImpRetidoAbr=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV98DirfImpRetidoAbr=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFIMPRETIDOABR",gx.O.AV98DirfImpRetidoAbr,2,',')},c2v:function(){gx.O.AV98DirfImpRetidoAbr=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFIMPRETIDOABR",'.',',')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFDIARIASABR",gxz:"ZV140DirfDiariasAbr",gxold:"OV140DirfDiariasAbr",gxvar:"AV140DirfDiariasAbr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV140DirfDiariasAbr=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV140DirfDiariasAbr=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFDIARIASABR",gx.O.AV140DirfDiariasAbr,2,',')},c2v:function(){gx.O.AV140DirfDiariasAbr=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFDIARIASABR",'.',',')},nac:gx.falseFn};
   GXValidFnc[101]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[103]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFRENDIMENTOMAI",gxz:"ZV129DirfRendimentoMai",gxold:"OV129DirfRendimentoMai",gxvar:"AV129DirfRendimentoMai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV129DirfRendimentoMai=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV129DirfRendimentoMai=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFRENDIMENTOMAI",gx.O.AV129DirfRendimentoMai,2,',')},c2v:function(){gx.O.AV129DirfRendimentoMai=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFRENDIMENTOMAI",'.',',')},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFPREVOFICIALMAI",gxz:"ZV117DirfPrevOficialMai",gxold:"OV117DirfPrevOficialMai",gxvar:"AV117DirfPrevOficialMai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV117DirfPrevOficialMai=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV117DirfPrevOficialMai=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFPREVOFICIALMAI",gx.O.AV117DirfPrevOficialMai,2,',')},c2v:function(){gx.O.AV117DirfPrevOficialMai=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFPREVOFICIALMAI",'.',',')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFIMPRETIDOMAI",gxz:"ZV105DirfImpRetidoMai",gxold:"OV105DirfImpRetidoMai",gxvar:"AV105DirfImpRetidoMai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105DirfImpRetidoMai=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV105DirfImpRetidoMai=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFIMPRETIDOMAI",gx.O.AV105DirfImpRetidoMai,2,',')},c2v:function(){gx.O.AV105DirfImpRetidoMai=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFIMPRETIDOMAI",'.',',')},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFDIARIASMAI",gxz:"ZV141DirfDiariasMai",gxold:"OV141DirfDiariasMai",gxvar:"AV141DirfDiariasMai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV141DirfDiariasMai=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV141DirfDiariasMai=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFDIARIASMAI",gx.O.AV141DirfDiariasMai,2,',')},c2v:function(){gx.O.AV141DirfDiariasMai=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFDIARIASMAI",'.',',')},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFRENDIMENTOJUN",gxz:"ZV128DirfRendimentoJun",gxold:"OV128DirfRendimentoJun",gxvar:"AV128DirfRendimentoJun",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV128DirfRendimentoJun=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV128DirfRendimentoJun=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFRENDIMENTOJUN",gx.O.AV128DirfRendimentoJun,2,',')},c2v:function(){gx.O.AV128DirfRendimentoJun=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFRENDIMENTOJUN",'.',',')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFPREVOFICIALJUN",gxz:"ZV116DirfPrevOficialJun",gxold:"OV116DirfPrevOficialJun",gxvar:"AV116DirfPrevOficialJun",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV116DirfPrevOficialJun=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV116DirfPrevOficialJun=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFPREVOFICIALJUN",gx.O.AV116DirfPrevOficialJun,2,',')},c2v:function(){gx.O.AV116DirfPrevOficialJun=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFPREVOFICIALJUN",'.',',')},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFIMPRETIDOJUN",gxz:"ZV104DirfImpRetidoJun",gxold:"OV104DirfImpRetidoJun",gxvar:"AV104DirfImpRetidoJun",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV104DirfImpRetidoJun=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV104DirfImpRetidoJun=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFIMPRETIDOJUN",gx.O.AV104DirfImpRetidoJun,2,',')},c2v:function(){gx.O.AV104DirfImpRetidoJun=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFIMPRETIDOJUN",'.',',')},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFDIARIASJUN",gxz:"ZV142DirfDiariasJun",gxold:"OV142DirfDiariasJun",gxvar:"AV142DirfDiariasJun",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV142DirfDiariasJun=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV142DirfDiariasJun=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFDIARIASJUN",gx.O.AV142DirfDiariasJun,2,',')},c2v:function(){gx.O.AV142DirfDiariasJun=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFDIARIASJUN",'.',',')},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFRENDIMENTOJUL",gxz:"ZV127DirfRendimentoJul",gxold:"OV127DirfRendimentoJul",gxvar:"AV127DirfRendimentoJul",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV127DirfRendimentoJul=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV127DirfRendimentoJul=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFRENDIMENTOJUL",gx.O.AV127DirfRendimentoJul,2,',')},c2v:function(){gx.O.AV127DirfRendimentoJul=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFRENDIMENTOJUL",'.',',')},nac:gx.falseFn};
   GXValidFnc[127]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFPREVOFICIALJUL",gxz:"ZV115DirfPrevOficialJul",gxold:"OV115DirfPrevOficialJul",gxvar:"AV115DirfPrevOficialJul",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV115DirfPrevOficialJul=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV115DirfPrevOficialJul=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFPREVOFICIALJUL",gx.O.AV115DirfPrevOficialJul,2,',')},c2v:function(){gx.O.AV115DirfPrevOficialJul=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFPREVOFICIALJUL",'.',',')},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFIMPRETIDOJUL",gxz:"ZV103DirfImpRetidoJul",gxold:"OV103DirfImpRetidoJul",gxvar:"AV103DirfImpRetidoJul",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103DirfImpRetidoJul=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV103DirfImpRetidoJul=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFIMPRETIDOJUL",gx.O.AV103DirfImpRetidoJul,2,',')},c2v:function(){gx.O.AV103DirfImpRetidoJul=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFIMPRETIDOJUL",'.',',')},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFDIARIASJUL",gxz:"ZV143DirfDiariasJul",gxold:"OV143DirfDiariasJul",gxvar:"AV143DirfDiariasJul",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV143DirfDiariasJul=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV143DirfDiariasJul=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFDIARIASJUL",gx.O.AV143DirfDiariasJul,2,',')},c2v:function(){gx.O.AV143DirfDiariasJul=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFDIARIASJUL",'.',',')},nac:gx.falseFn};
   GXValidFnc[134]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[136]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFRENDIMENTOAGO",gxz:"ZV123DirfRendimentoAgo",gxold:"OV123DirfRendimentoAgo",gxvar:"AV123DirfRendimentoAgo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV123DirfRendimentoAgo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV123DirfRendimentoAgo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFRENDIMENTOAGO",gx.O.AV123DirfRendimentoAgo,2,',')},c2v:function(){gx.O.AV123DirfRendimentoAgo=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFRENDIMENTOAGO",'.',',')},nac:gx.falseFn};
   GXValidFnc[138]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFPREVOFICIALAGO",gxz:"ZV111DirfPrevOficialAgo",gxold:"OV111DirfPrevOficialAgo",gxvar:"AV111DirfPrevOficialAgo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV111DirfPrevOficialAgo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV111DirfPrevOficialAgo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFPREVOFICIALAGO",gx.O.AV111DirfPrevOficialAgo,2,',')},c2v:function(){gx.O.AV111DirfPrevOficialAgo=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFPREVOFICIALAGO",'.',',')},nac:gx.falseFn};
   GXValidFnc[140]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFIMPRETIDOAGO",gxz:"ZV99DirfImpRetidoAgo",gxold:"OV99DirfImpRetidoAgo",gxvar:"AV99DirfImpRetidoAgo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV99DirfImpRetidoAgo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV99DirfImpRetidoAgo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFIMPRETIDOAGO",gx.O.AV99DirfImpRetidoAgo,2,',')},c2v:function(){gx.O.AV99DirfImpRetidoAgo=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFIMPRETIDOAGO",'.',',')},nac:gx.falseFn};
   GXValidFnc[142]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFDIARIASAGO",gxz:"ZV144DirfDiariasAgo",gxold:"OV144DirfDiariasAgo",gxvar:"AV144DirfDiariasAgo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV144DirfDiariasAgo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV144DirfDiariasAgo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFDIARIASAGO",gx.O.AV144DirfDiariasAgo,2,',')},c2v:function(){gx.O.AV144DirfDiariasAgo=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFDIARIASAGO",'.',',')},nac:gx.falseFn};
   GXValidFnc[145]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[147]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFRENDIMENTOSET",gxz:"ZV133DirfRendimentoSet",gxold:"OV133DirfRendimentoSet",gxvar:"AV133DirfRendimentoSet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV133DirfRendimentoSet=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV133DirfRendimentoSet=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFRENDIMENTOSET",gx.O.AV133DirfRendimentoSet,2,',')},c2v:function(){gx.O.AV133DirfRendimentoSet=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFRENDIMENTOSET",'.',',')},nac:gx.falseFn};
   GXValidFnc[149]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFPREVOFICIALSET",gxz:"ZV121DirfPrevOficialSet",gxold:"OV121DirfPrevOficialSet",gxvar:"AV121DirfPrevOficialSet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV121DirfPrevOficialSet=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV121DirfPrevOficialSet=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFPREVOFICIALSET",gx.O.AV121DirfPrevOficialSet,2,',')},c2v:function(){gx.O.AV121DirfPrevOficialSet=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFPREVOFICIALSET",'.',',')},nac:gx.falseFn};
   GXValidFnc[151]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFIMPRETIDOSET",gxz:"ZV109DirfImpRetidoSet",gxold:"OV109DirfImpRetidoSet",gxvar:"AV109DirfImpRetidoSet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV109DirfImpRetidoSet=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV109DirfImpRetidoSet=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFIMPRETIDOSET",gx.O.AV109DirfImpRetidoSet,2,',')},c2v:function(){gx.O.AV109DirfImpRetidoSet=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFIMPRETIDOSET",'.',',')},nac:gx.falseFn};
   GXValidFnc[153]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFDIARIASSET",gxz:"ZV145DirfDiariasSet",gxold:"OV145DirfDiariasSet",gxvar:"AV145DirfDiariasSet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV145DirfDiariasSet=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV145DirfDiariasSet=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFDIARIASSET",gx.O.AV145DirfDiariasSet,2,',')},c2v:function(){gx.O.AV145DirfDiariasSet=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFDIARIASSET",'.',',')},nac:gx.falseFn};
   GXValidFnc[156]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[158]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFRENDIMENTOOUT",gxz:"ZV132DirfRendimentoOut",gxold:"OV132DirfRendimentoOut",gxvar:"AV132DirfRendimentoOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV132DirfRendimentoOut=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV132DirfRendimentoOut=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFRENDIMENTOOUT",gx.O.AV132DirfRendimentoOut,2,',')},c2v:function(){gx.O.AV132DirfRendimentoOut=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFRENDIMENTOOUT",'.',',')},nac:gx.falseFn};
   GXValidFnc[160]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFPREVOFICIALOUT",gxz:"ZV120DirfPrevOficialOut",gxold:"OV120DirfPrevOficialOut",gxvar:"AV120DirfPrevOficialOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV120DirfPrevOficialOut=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV120DirfPrevOficialOut=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFPREVOFICIALOUT",gx.O.AV120DirfPrevOficialOut,2,',')},c2v:function(){gx.O.AV120DirfPrevOficialOut=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFPREVOFICIALOUT",'.',',')},nac:gx.falseFn};
   GXValidFnc[162]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFIMPRETIDOOUT",gxz:"ZV108DirfImpRetidoOut",gxold:"OV108DirfImpRetidoOut",gxvar:"AV108DirfImpRetidoOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108DirfImpRetidoOut=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV108DirfImpRetidoOut=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFIMPRETIDOOUT",gx.O.AV108DirfImpRetidoOut,2,',')},c2v:function(){gx.O.AV108DirfImpRetidoOut=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFIMPRETIDOOUT",'.',',')},nac:gx.falseFn};
   GXValidFnc[164]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFDIARIASOUT",gxz:"ZV146DirfDiariasOut",gxold:"OV146DirfDiariasOut",gxvar:"AV146DirfDiariasOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV146DirfDiariasOut=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV146DirfDiariasOut=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFDIARIASOUT",gx.O.AV146DirfDiariasOut,2,',')},c2v:function(){gx.O.AV146DirfDiariasOut=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFDIARIASOUT",'.',',')},nac:gx.falseFn};
   GXValidFnc[167]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[169]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFRENDIMENTONOV",gxz:"ZV131DirfRendimentoNov",gxold:"OV131DirfRendimentoNov",gxvar:"AV131DirfRendimentoNov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV131DirfRendimentoNov=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV131DirfRendimentoNov=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFRENDIMENTONOV",gx.O.AV131DirfRendimentoNov,2,',')},c2v:function(){gx.O.AV131DirfRendimentoNov=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFRENDIMENTONOV",'.',',')},nac:gx.falseFn};
   GXValidFnc[171]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFPREVOFICIALNOV",gxz:"ZV119DirfPrevOficialNov",gxold:"OV119DirfPrevOficialNov",gxvar:"AV119DirfPrevOficialNov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119DirfPrevOficialNov=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV119DirfPrevOficialNov=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFPREVOFICIALNOV",gx.O.AV119DirfPrevOficialNov,2,',')},c2v:function(){gx.O.AV119DirfPrevOficialNov=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFPREVOFICIALNOV",'.',',')},nac:gx.falseFn};
   GXValidFnc[173]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFIMPRETIDONOV",gxz:"ZV107DirfImpRetidoNov",gxold:"OV107DirfImpRetidoNov",gxvar:"AV107DirfImpRetidoNov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV107DirfImpRetidoNov=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV107DirfImpRetidoNov=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFIMPRETIDONOV",gx.O.AV107DirfImpRetidoNov,2,',')},c2v:function(){gx.O.AV107DirfImpRetidoNov=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFIMPRETIDONOV",'.',',')},nac:gx.falseFn};
   GXValidFnc[175]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFDIARIASNOV",gxz:"ZV147DirfDiariasNov",gxold:"OV147DirfDiariasNov",gxvar:"AV147DirfDiariasNov",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV147DirfDiariasNov=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV147DirfDiariasNov=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFDIARIASNOV",gx.O.AV147DirfDiariasNov,2,',')},c2v:function(){gx.O.AV147DirfDiariasNov=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFDIARIASNOV",'.',',')},nac:gx.falseFn};
   GXValidFnc[178]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[180]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFRENDIMENTODEZ",gxz:"ZV124DirfRendimentoDez",gxold:"OV124DirfRendimentoDez",gxvar:"AV124DirfRendimentoDez",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV124DirfRendimentoDez=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV124DirfRendimentoDez=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFRENDIMENTODEZ",gx.O.AV124DirfRendimentoDez,2,',')},c2v:function(){gx.O.AV124DirfRendimentoDez=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFRENDIMENTODEZ",'.',',')},nac:gx.falseFn};
   GXValidFnc[182]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFPREVOFICIALDEZ",gxz:"ZV112DirfPrevOficialDez",gxold:"OV112DirfPrevOficialDez",gxvar:"AV112DirfPrevOficialDez",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV112DirfPrevOficialDez=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV112DirfPrevOficialDez=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFPREVOFICIALDEZ",gx.O.AV112DirfPrevOficialDez,2,',')},c2v:function(){gx.O.AV112DirfPrevOficialDez=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFPREVOFICIALDEZ",'.',',')},nac:gx.falseFn};
   GXValidFnc[184]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFIMPRETIDODEZ",gxz:"ZV100DirfImpRetidoDez",gxold:"OV100DirfImpRetidoDez",gxvar:"AV100DirfImpRetidoDez",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100DirfImpRetidoDez=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV100DirfImpRetidoDez=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFIMPRETIDODEZ",gx.O.AV100DirfImpRetidoDez,2,',')},c2v:function(){gx.O.AV100DirfImpRetidoDez=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFIMPRETIDODEZ",'.',',')},nac:gx.falseFn};
   GXValidFnc[186]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFDIARIASDEZ",gxz:"ZV148DirfDiariasDez",gxold:"OV148DirfDiariasDez",gxvar:"AV148DirfDiariasDez",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV148DirfDiariasDez=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV148DirfDiariasDez=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFDIARIASDEZ",gx.O.AV148DirfDiariasDez,2,',')},c2v:function(){gx.O.AV148DirfDiariasDez=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFDIARIASDEZ",'.',',')},nac:gx.falseFn};
   GXValidFnc[189]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[191]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFRENDIMENTO13",gxz:"ZV134DirfRendimento13",gxold:"OV134DirfRendimento13",gxvar:"AV134DirfRendimento13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV134DirfRendimento13=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV134DirfRendimento13=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFRENDIMENTO13",gx.O.AV134DirfRendimento13,2,',')},c2v:function(){gx.O.AV134DirfRendimento13=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFRENDIMENTO13",'.',',')},nac:gx.falseFn};
   GXValidFnc[193]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFPREVOFICIAL13",gxz:"ZV136DirfPrevOficial13",gxold:"OV136DirfPrevOficial13",gxvar:"AV136DirfPrevOficial13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV136DirfPrevOficial13=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV136DirfPrevOficial13=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFPREVOFICIAL13",gx.O.AV136DirfPrevOficial13,2,',')},c2v:function(){gx.O.AV136DirfPrevOficial13=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFPREVOFICIAL13",'.',',')},nac:gx.falseFn};
   GXValidFnc[195]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFIMPRETIDO13",gxz:"ZV135DirfImpRetido13",gxold:"OV135DirfImpRetido13",gxvar:"AV135DirfImpRetido13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV135DirfImpRetido13=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV135DirfImpRetido13=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFIMPRETIDO13",gx.O.AV135DirfImpRetido13,2,',')},c2v:function(){gx.O.AV135DirfImpRetido13=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFIMPRETIDO13",'.',',')},nac:gx.falseFn};
   GXValidFnc[197]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFDIARIAS13",gxz:"ZV149DirfDiarias13",gxold:"OV149DirfDiarias13",gxvar:"AV149DirfDiarias13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV149DirfDiarias13=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV149DirfDiarias13=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFDIARIAS13",gx.O.AV149DirfDiarias13,2,',')},c2v:function(){gx.O.AV149DirfDiarias13=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFDIARIAS13",'.',',')},nac:gx.falseFn};
   GXValidFnc[200]={fld:"TEXTBLOCK31", format:0,grid:0};
   GXValidFnc[202]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFRENDIMENTOTOTALANUAL",gxz:"ZV67DirfRendimentoTotalAnual",gxold:"OV67DirfRendimentoTotalAnual",gxvar:"AV67DirfRendimentoTotalAnual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67DirfRendimentoTotalAnual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV67DirfRendimentoTotalAnual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFRENDIMENTOTOTALANUAL",gx.O.AV67DirfRendimentoTotalAnual,2,',')},c2v:function(){gx.O.AV67DirfRendimentoTotalAnual=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFRENDIMENTOTOTALANUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[204]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFPREVOFICIALTOTALANUAL",gxz:"ZV68DirfPrevOficialTotalAnual",gxold:"OV68DirfPrevOficialTotalAnual",gxvar:"AV68DirfPrevOficialTotalAnual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68DirfPrevOficialTotalAnual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV68DirfPrevOficialTotalAnual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFPREVOFICIALTOTALANUAL",gx.O.AV68DirfPrevOficialTotalAnual,2,',')},c2v:function(){gx.O.AV68DirfPrevOficialTotalAnual=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFPREVOFICIALTOTALANUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[206]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFIMPRETIDOTOTALANUAL",gxz:"ZV69DirfImpRetidoTotalAnual",gxold:"OV69DirfImpRetidoTotalAnual",gxvar:"AV69DirfImpRetidoTotalAnual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69DirfImpRetidoTotalAnual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV69DirfImpRetidoTotalAnual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFIMPRETIDOTOTALANUAL",gx.O.AV69DirfImpRetidoTotalAnual,2,',')},c2v:function(){gx.O.AV69DirfImpRetidoTotalAnual=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFIMPRETIDOTOTALANUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[208]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRFDIARIASTOTALANUAL",gxz:"ZV151DirfDiariasTotalAnual",gxold:"OV151DirfDiariasTotalAnual",gxvar:"AV151DirfDiariasTotalAnual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV151DirfDiariasTotalAnual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV151DirfDiariasTotalAnual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vDIRFDIARIASTOTALANUAL",gx.O.AV151DirfDiariasTotalAnual,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV151DirfDiariasTotalAnual=this.val()},val:function(){return gx.fn.getDecimalValue("vDIRFDIARIASTOTALANUAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 208 , function() {
   });
   GXValidFnc[214]={fld:"TABLE5",grid:0};
   GXValidFnc[222]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[223]={fld:"JS", format:2,grid:0};
   GXValidFnc[225]={fld:"BTNHELP",grid:0};
   GXValidFnc[226]={fld:"PROMPT_RETENCAOCODIGO",grid:0};
   this.AV74DirfAnoRetencao = 0 ;
   this.ZV74DirfAnoRetencao = 0 ;
   this.OV74DirfAnoRetencao = 0 ;
   this.AV75RetencaoCodigo = 0 ;
   this.ZV75RetencaoCodigo = 0 ;
   this.OV75RetencaoCodigo = 0 ;
   this.AV91RetencaoDescricao = "" ;
   this.ZV91RetencaoDescricao = "" ;
   this.OV91RetencaoDescricao = "" ;
   this.AV72DirfCPF = "" ;
   this.ZV72DirfCPF = "" ;
   this.OV72DirfCPF = "" ;
   this.AV90DirfNome = "" ;
   this.ZV90DirfNome = "" ;
   this.OV90DirfNome = "" ;
   this.AV73DirfCNPJ = "" ;
   this.ZV73DirfCNPJ = "" ;
   this.OV73DirfCNPJ = "" ;
   this.AV87DirfNome2 = "" ;
   this.ZV87DirfNome2 = "" ;
   this.OV87DirfNome2 = "" ;
   this.AV126DirfRendimentoJan = 0 ;
   this.ZV126DirfRendimentoJan = 0 ;
   this.OV126DirfRendimentoJan = 0 ;
   this.AV114DirfPrevOficialJan = 0 ;
   this.ZV114DirfPrevOficialJan = 0 ;
   this.OV114DirfPrevOficialJan = 0 ;
   this.AV102DirfImpRetidoJan = 0 ;
   this.ZV102DirfImpRetidoJan = 0 ;
   this.OV102DirfImpRetidoJan = 0 ;
   this.AV137DirfDiariasJan = 0 ;
   this.ZV137DirfDiariasJan = 0 ;
   this.OV137DirfDiariasJan = 0 ;
   this.AV125DirfRendimentoFev = 0 ;
   this.ZV125DirfRendimentoFev = 0 ;
   this.OV125DirfRendimentoFev = 0 ;
   this.AV113DirfPrevOficialFev = 0 ;
   this.ZV113DirfPrevOficialFev = 0 ;
   this.OV113DirfPrevOficialFev = 0 ;
   this.AV101DirfImpRetidoFev = 0 ;
   this.ZV101DirfImpRetidoFev = 0 ;
   this.OV101DirfImpRetidoFev = 0 ;
   this.AV138DirfDiariasFev = 0 ;
   this.ZV138DirfDiariasFev = 0 ;
   this.OV138DirfDiariasFev = 0 ;
   this.AV130DirfRendimentoMar = 0 ;
   this.ZV130DirfRendimentoMar = 0 ;
   this.OV130DirfRendimentoMar = 0 ;
   this.AV118DirfPrevOficialMar = 0 ;
   this.ZV118DirfPrevOficialMar = 0 ;
   this.OV118DirfPrevOficialMar = 0 ;
   this.AV106DirfImpRetidoMar = 0 ;
   this.ZV106DirfImpRetidoMar = 0 ;
   this.OV106DirfImpRetidoMar = 0 ;
   this.AV139DirfDiariasMar = 0 ;
   this.ZV139DirfDiariasMar = 0 ;
   this.OV139DirfDiariasMar = 0 ;
   this.AV122DirfRendimentoAbr = 0 ;
   this.ZV122DirfRendimentoAbr = 0 ;
   this.OV122DirfRendimentoAbr = 0 ;
   this.AV110DirfPrevOficialAbr = 0 ;
   this.ZV110DirfPrevOficialAbr = 0 ;
   this.OV110DirfPrevOficialAbr = 0 ;
   this.AV98DirfImpRetidoAbr = 0 ;
   this.ZV98DirfImpRetidoAbr = 0 ;
   this.OV98DirfImpRetidoAbr = 0 ;
   this.AV140DirfDiariasAbr = 0 ;
   this.ZV140DirfDiariasAbr = 0 ;
   this.OV140DirfDiariasAbr = 0 ;
   this.AV129DirfRendimentoMai = 0 ;
   this.ZV129DirfRendimentoMai = 0 ;
   this.OV129DirfRendimentoMai = 0 ;
   this.AV117DirfPrevOficialMai = 0 ;
   this.ZV117DirfPrevOficialMai = 0 ;
   this.OV117DirfPrevOficialMai = 0 ;
   this.AV105DirfImpRetidoMai = 0 ;
   this.ZV105DirfImpRetidoMai = 0 ;
   this.OV105DirfImpRetidoMai = 0 ;
   this.AV141DirfDiariasMai = 0 ;
   this.ZV141DirfDiariasMai = 0 ;
   this.OV141DirfDiariasMai = 0 ;
   this.AV128DirfRendimentoJun = 0 ;
   this.ZV128DirfRendimentoJun = 0 ;
   this.OV128DirfRendimentoJun = 0 ;
   this.AV116DirfPrevOficialJun = 0 ;
   this.ZV116DirfPrevOficialJun = 0 ;
   this.OV116DirfPrevOficialJun = 0 ;
   this.AV104DirfImpRetidoJun = 0 ;
   this.ZV104DirfImpRetidoJun = 0 ;
   this.OV104DirfImpRetidoJun = 0 ;
   this.AV142DirfDiariasJun = 0 ;
   this.ZV142DirfDiariasJun = 0 ;
   this.OV142DirfDiariasJun = 0 ;
   this.AV127DirfRendimentoJul = 0 ;
   this.ZV127DirfRendimentoJul = 0 ;
   this.OV127DirfRendimentoJul = 0 ;
   this.AV115DirfPrevOficialJul = 0 ;
   this.ZV115DirfPrevOficialJul = 0 ;
   this.OV115DirfPrevOficialJul = 0 ;
   this.AV103DirfImpRetidoJul = 0 ;
   this.ZV103DirfImpRetidoJul = 0 ;
   this.OV103DirfImpRetidoJul = 0 ;
   this.AV143DirfDiariasJul = 0 ;
   this.ZV143DirfDiariasJul = 0 ;
   this.OV143DirfDiariasJul = 0 ;
   this.AV123DirfRendimentoAgo = 0 ;
   this.ZV123DirfRendimentoAgo = 0 ;
   this.OV123DirfRendimentoAgo = 0 ;
   this.AV111DirfPrevOficialAgo = 0 ;
   this.ZV111DirfPrevOficialAgo = 0 ;
   this.OV111DirfPrevOficialAgo = 0 ;
   this.AV99DirfImpRetidoAgo = 0 ;
   this.ZV99DirfImpRetidoAgo = 0 ;
   this.OV99DirfImpRetidoAgo = 0 ;
   this.AV144DirfDiariasAgo = 0 ;
   this.ZV144DirfDiariasAgo = 0 ;
   this.OV144DirfDiariasAgo = 0 ;
   this.AV133DirfRendimentoSet = 0 ;
   this.ZV133DirfRendimentoSet = 0 ;
   this.OV133DirfRendimentoSet = 0 ;
   this.AV121DirfPrevOficialSet = 0 ;
   this.ZV121DirfPrevOficialSet = 0 ;
   this.OV121DirfPrevOficialSet = 0 ;
   this.AV109DirfImpRetidoSet = 0 ;
   this.ZV109DirfImpRetidoSet = 0 ;
   this.OV109DirfImpRetidoSet = 0 ;
   this.AV145DirfDiariasSet = 0 ;
   this.ZV145DirfDiariasSet = 0 ;
   this.OV145DirfDiariasSet = 0 ;
   this.AV132DirfRendimentoOut = 0 ;
   this.ZV132DirfRendimentoOut = 0 ;
   this.OV132DirfRendimentoOut = 0 ;
   this.AV120DirfPrevOficialOut = 0 ;
   this.ZV120DirfPrevOficialOut = 0 ;
   this.OV120DirfPrevOficialOut = 0 ;
   this.AV108DirfImpRetidoOut = 0 ;
   this.ZV108DirfImpRetidoOut = 0 ;
   this.OV108DirfImpRetidoOut = 0 ;
   this.AV146DirfDiariasOut = 0 ;
   this.ZV146DirfDiariasOut = 0 ;
   this.OV146DirfDiariasOut = 0 ;
   this.AV131DirfRendimentoNov = 0 ;
   this.ZV131DirfRendimentoNov = 0 ;
   this.OV131DirfRendimentoNov = 0 ;
   this.AV119DirfPrevOficialNov = 0 ;
   this.ZV119DirfPrevOficialNov = 0 ;
   this.OV119DirfPrevOficialNov = 0 ;
   this.AV107DirfImpRetidoNov = 0 ;
   this.ZV107DirfImpRetidoNov = 0 ;
   this.OV107DirfImpRetidoNov = 0 ;
   this.AV147DirfDiariasNov = 0 ;
   this.ZV147DirfDiariasNov = 0 ;
   this.OV147DirfDiariasNov = 0 ;
   this.AV124DirfRendimentoDez = 0 ;
   this.ZV124DirfRendimentoDez = 0 ;
   this.OV124DirfRendimentoDez = 0 ;
   this.AV112DirfPrevOficialDez = 0 ;
   this.ZV112DirfPrevOficialDez = 0 ;
   this.OV112DirfPrevOficialDez = 0 ;
   this.AV100DirfImpRetidoDez = 0 ;
   this.ZV100DirfImpRetidoDez = 0 ;
   this.OV100DirfImpRetidoDez = 0 ;
   this.AV148DirfDiariasDez = 0 ;
   this.ZV148DirfDiariasDez = 0 ;
   this.OV148DirfDiariasDez = 0 ;
   this.AV134DirfRendimento13 = 0 ;
   this.ZV134DirfRendimento13 = 0 ;
   this.OV134DirfRendimento13 = 0 ;
   this.AV136DirfPrevOficial13 = 0 ;
   this.ZV136DirfPrevOficial13 = 0 ;
   this.OV136DirfPrevOficial13 = 0 ;
   this.AV135DirfImpRetido13 = 0 ;
   this.ZV135DirfImpRetido13 = 0 ;
   this.OV135DirfImpRetido13 = 0 ;
   this.AV149DirfDiarias13 = 0 ;
   this.ZV149DirfDiarias13 = 0 ;
   this.OV149DirfDiarias13 = 0 ;
   this.AV67DirfRendimentoTotalAnual = 0 ;
   this.ZV67DirfRendimentoTotalAnual = 0 ;
   this.OV67DirfRendimentoTotalAnual = 0 ;
   this.AV68DirfPrevOficialTotalAnual = 0 ;
   this.ZV68DirfPrevOficialTotalAnual = 0 ;
   this.OV68DirfPrevOficialTotalAnual = 0 ;
   this.AV69DirfImpRetidoTotalAnual = 0 ;
   this.ZV69DirfImpRetidoTotalAnual = 0 ;
   this.OV69DirfImpRetidoTotalAnual = 0 ;
   this.AV151DirfDiariasTotalAnual = 0 ;
   this.ZV151DirfDiariasTotalAnual = 0 ;
   this.OV151DirfDiariasTotalAnual = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV74DirfAnoRetencao = 0 ;
   this.AV75RetencaoCodigo = 0 ;
   this.AV91RetencaoDescricao = "" ;
   this.AV72DirfCPF = "" ;
   this.AV90DirfNome = "" ;
   this.AV73DirfCNPJ = "" ;
   this.AV87DirfNome2 = "" ;
   this.AV126DirfRendimentoJan = 0 ;
   this.AV114DirfPrevOficialJan = 0 ;
   this.AV102DirfImpRetidoJan = 0 ;
   this.AV137DirfDiariasJan = 0 ;
   this.AV125DirfRendimentoFev = 0 ;
   this.AV113DirfPrevOficialFev = 0 ;
   this.AV101DirfImpRetidoFev = 0 ;
   this.AV138DirfDiariasFev = 0 ;
   this.AV130DirfRendimentoMar = 0 ;
   this.AV118DirfPrevOficialMar = 0 ;
   this.AV106DirfImpRetidoMar = 0 ;
   this.AV139DirfDiariasMar = 0 ;
   this.AV122DirfRendimentoAbr = 0 ;
   this.AV110DirfPrevOficialAbr = 0 ;
   this.AV98DirfImpRetidoAbr = 0 ;
   this.AV140DirfDiariasAbr = 0 ;
   this.AV129DirfRendimentoMai = 0 ;
   this.AV117DirfPrevOficialMai = 0 ;
   this.AV105DirfImpRetidoMai = 0 ;
   this.AV141DirfDiariasMai = 0 ;
   this.AV128DirfRendimentoJun = 0 ;
   this.AV116DirfPrevOficialJun = 0 ;
   this.AV104DirfImpRetidoJun = 0 ;
   this.AV142DirfDiariasJun = 0 ;
   this.AV127DirfRendimentoJul = 0 ;
   this.AV115DirfPrevOficialJul = 0 ;
   this.AV103DirfImpRetidoJul = 0 ;
   this.AV143DirfDiariasJul = 0 ;
   this.AV123DirfRendimentoAgo = 0 ;
   this.AV111DirfPrevOficialAgo = 0 ;
   this.AV99DirfImpRetidoAgo = 0 ;
   this.AV144DirfDiariasAgo = 0 ;
   this.AV133DirfRendimentoSet = 0 ;
   this.AV121DirfPrevOficialSet = 0 ;
   this.AV109DirfImpRetidoSet = 0 ;
   this.AV145DirfDiariasSet = 0 ;
   this.AV132DirfRendimentoOut = 0 ;
   this.AV120DirfPrevOficialOut = 0 ;
   this.AV108DirfImpRetidoOut = 0 ;
   this.AV146DirfDiariasOut = 0 ;
   this.AV131DirfRendimentoNov = 0 ;
   this.AV119DirfPrevOficialNov = 0 ;
   this.AV107DirfImpRetidoNov = 0 ;
   this.AV147DirfDiariasNov = 0 ;
   this.AV124DirfRendimentoDez = 0 ;
   this.AV112DirfPrevOficialDez = 0 ;
   this.AV100DirfImpRetidoDez = 0 ;
   this.AV148DirfDiariasDez = 0 ;
   this.AV134DirfRendimento13 = 0 ;
   this.AV136DirfPrevOficial13 = 0 ;
   this.AV135DirfImpRetido13 = 0 ;
   this.AV149DirfDiarias13 = 0 ;
   this.AV67DirfRendimentoTotalAnual = 0 ;
   this.AV68DirfPrevOficialTotalAnual = 0 ;
   this.AV69DirfImpRetidoTotalAnual = 0 ;
   this.AV151DirfDiariasTotalAnual = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.A3056DirfCPFCNPJ = "" ;
   this.A2883RetencaoTipo = "" ;
   this.A2885RetencaoCodigo = 0 ;
   this.A3040DirfAnoRetencao = 0 ;
   this.A2884RetencaoEmpresaId = "" ;
   this.A2999DirfRendimentoJan = 0 ;
   this.A3000DirfRendimentoFev = 0 ;
   this.A3001DirfRendimentoMar = 0 ;
   this.A3002DirfRendimentoAbr = 0 ;
   this.A3003DirfRendimentoMai = 0 ;
   this.A3004DirfRendimentoJun = 0 ;
   this.A3005DirfRendimentoJul = 0 ;
   this.A3006DirfRendimentoAgo = 0 ;
   this.A3007DirfRendimentoSet = 0 ;
   this.A3008DirfRendimentoOut = 0 ;
   this.A3009DirfRendimentoNov = 0 ;
   this.A3010DirfRendimentoDez = 0 ;
   this.A3011DirfRendimento13 = 0 ;
   this.A3012DirfPrevOficialJan = 0 ;
   this.A3013DirfPrevOficialFev = 0 ;
   this.A3014DirfPrevOficialMar = 0 ;
   this.A3015DirfPrevOficialAbr = 0 ;
   this.A3016DirfPrevOficialMai = 0 ;
   this.A3017DirfPrevOficialJun = 0 ;
   this.A3018DirfPrevOficialJul = 0 ;
   this.A3019DirfPrevOficialAgo = 0 ;
   this.A3020DirfPrevOficialSet = 0 ;
   this.A3021DirfPrevOficialOut = 0 ;
   this.A3022DirfPrevOficialNov = 0 ;
   this.A3023DirfPrevOficialDez = 0 ;
   this.A3024DirfPrevOficial13 = 0 ;
   this.A3025DirfImpRetidoJan = 0 ;
   this.A3026DirfImpRetidoFev = 0 ;
   this.A3027DirfImpRetidoMar = 0 ;
   this.A3028DirfImpRetidoAbr = 0 ;
   this.A3029DirfImpRetidoMai = 0 ;
   this.A3030DirfImpRetidoJun = 0 ;
   this.A3031DirfImpRetidoJul = 0 ;
   this.A3032DirfImpRetidoAgo = 0 ;
   this.A3033DirfImpRetidoSet = 0 ;
   this.A3034DirfImpRetidoOut = 0 ;
   this.A3035DirfImpRetidoNov = 0 ;
   this.A3036DirfImpRetidoDez = 0 ;
   this.A3037DirfImpRetido13 = 0 ;
   this.A11525DirfDiariasJan = 0 ;
   this.A11526DirfDiariasFev = 0 ;
   this.A11527DirfDiariasMar = 0 ;
   this.A11528DirfDiariasAbr = 0 ;
   this.A11530DirfDiariasJun = 0 ;
   this.A11531DirfDiariasJul = 0 ;
   this.A11532DirfDiariasAgo = 0 ;
   this.A11533DirfDiariasSet = 0 ;
   this.A11534DirfDiariasOut = 0 ;
   this.A11535DirfDiariasNov = 0 ;
   this.A11536DirfDiariasDez = 0 ;
   this.A11537DirfDiarias13 = 0 ;
   this.A11529DirfDiariasMai = 0 ;
   this.AV97DirfCPFCNPJ = "" ;
   this.AV96DirfEmpresaId = "" ;
   this.AV70SnErro = "" ;
   this.Events = {"e11jw2_client": ["'FECHAR'", true] ,"e13jw2_client": ["ENTER", true] ,"e14jw2_client": ["'ABRIRCONTASDIRF'", true] ,"e15jw2_client": ["'ALTERAR'", true] ,"e16jw2_client": ["'EXCLUIR'", true] ,"e18jw2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV154Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV74DirfAnoRetencao',fld:'vDIRFANORETENCAO'},{av:'AV75RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV72DirfCPF',fld:'vDIRFCPF'},{av:'AV73DirfCNPJ',fld:'vDIRFCNPJ'},{av:'AV91RetencaoDescricao',fld:'vRETENCAODESCRICAO'},{av:'AV90DirfNome',fld:'vDIRFNOME'},{av:'AV87DirfNome2',fld:'vDIRFNOME2'},{av:'AV154Pgmname',fld:'vPGMNAME'},{av:'A2884RetencaoEmpresaId',fld:'RETENCAOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3040DirfAnoRetencao',fld:'DIRFANORETENCAO'},{av:'A2885RetencaoCodigo',fld:'RETENCAOCODIGO'},{av:'A2883RetencaoTipo',fld:'RETENCAOTIPO'},{av:'A3056DirfCPFCNPJ',fld:'DIRFCPFCNPJ'},{av:'AV97DirfCPFCNPJ',fld:'vDIRFCPFCNPJ'},{av:'A2999DirfRendimentoJan',fld:'DIRFRENDIMENTOJAN'},{av:'A3000DirfRendimentoFev',fld:'DIRFRENDIMENTOFEV'},{av:'A3001DirfRendimentoMar',fld:'DIRFRENDIMENTOMAR'},{av:'A3002DirfRendimentoAbr',fld:'DIRFRENDIMENTOABR'},{av:'A3003DirfRendimentoMai',fld:'DIRFRENDIMENTOMAI'},{av:'A3004DirfRendimentoJun',fld:'DIRFRENDIMENTOJUN'},{av:'A3005DirfRendimentoJul',fld:'DIRFRENDIMENTOJUL'},{av:'A3006DirfRendimentoAgo',fld:'DIRFRENDIMENTOAGO'},{av:'A3007DirfRendimentoSet',fld:'DIRFRENDIMENTOSET'},{av:'A3008DirfRendimentoOut',fld:'DIRFRENDIMENTOOUT'},{av:'A3009DirfRendimentoNov',fld:'DIRFRENDIMENTONOV'},{av:'A3010DirfRendimentoDez',fld:'DIRFRENDIMENTODEZ'},{av:'A3011DirfRendimento13',fld:'DIRFRENDIMENTO13'},{av:'A3012DirfPrevOficialJan',fld:'DIRFPREVOFICIALJAN'},{av:'A3013DirfPrevOficialFev',fld:'DIRFPREVOFICIALFEV'},{av:'A3014DirfPrevOficialMar',fld:'DIRFPREVOFICIALMAR'},{av:'A3015DirfPrevOficialAbr',fld:'DIRFPREVOFICIALABR'},{av:'A3016DirfPrevOficialMai',fld:'DIRFPREVOFICIALMAI'},{av:'A3017DirfPrevOficialJun',fld:'DIRFPREVOFICIALJUN'},{av:'A3018DirfPrevOficialJul',fld:'DIRFPREVOFICIALJUL'},{av:'A3019DirfPrevOficialAgo',fld:'DIRFPREVOFICIALAGO'},{av:'A3020DirfPrevOficialSet',fld:'DIRFPREVOFICIALSET'},{av:'A3021DirfPrevOficialOut',fld:'DIRFPREVOFICIALOUT'},{av:'A3022DirfPrevOficialNov',fld:'DIRFPREVOFICIALNOV'},{av:'A3023DirfPrevOficialDez',fld:'DIRFPREVOFICIALDEZ'},{av:'A3024DirfPrevOficial13',fld:'DIRFPREVOFICIAL13'},{av:'A3025DirfImpRetidoJan',fld:'DIRFIMPRETIDOJAN'},{av:'A3026DirfImpRetidoFev',fld:'DIRFIMPRETIDOFEV'},{av:'A3027DirfImpRetidoMar',fld:'DIRFIMPRETIDOMAR'},{av:'A3028DirfImpRetidoAbr',fld:'DIRFIMPRETIDOABR'},{av:'A3029DirfImpRetidoMai',fld:'DIRFIMPRETIDOMAI'},{av:'A3030DirfImpRetidoJun',fld:'DIRFIMPRETIDOJUN'},{av:'A3031DirfImpRetidoJul',fld:'DIRFIMPRETIDOJUL'},{av:'A3032DirfImpRetidoAgo',fld:'DIRFIMPRETIDOAGO'},{av:'A3033DirfImpRetidoSet',fld:'DIRFIMPRETIDOSET'},{av:'A3034DirfImpRetidoOut',fld:'DIRFIMPRETIDOOUT'},{av:'A3035DirfImpRetidoNov',fld:'DIRFIMPRETIDONOV'},{av:'A3036DirfImpRetidoDez',fld:'DIRFIMPRETIDODEZ'},{av:'A3037DirfImpRetido13',fld:'DIRFIMPRETIDO13'},{av:'A11525DirfDiariasJan',fld:'DIRFDIARIASJAN'},{av:'A11526DirfDiariasFev',fld:'DIRFDIARIASFEV'},{av:'A11527DirfDiariasMar',fld:'DIRFDIARIASMAR'},{av:'A11528DirfDiariasAbr',fld:'DIRFDIARIASABR'},{av:'A11530DirfDiariasJun',fld:'DIRFDIARIASJUN'},{av:'A11531DirfDiariasJul',fld:'DIRFDIARIASJUL'},{av:'A11532DirfDiariasAgo',fld:'DIRFDIARIASAGO'},{av:'A11533DirfDiariasSet',fld:'DIRFDIARIASSET'},{av:'A11534DirfDiariasOut',fld:'DIRFDIARIASOUT'},{av:'A11535DirfDiariasNov',fld:'DIRFDIARIASNOV'},{av:'A11536DirfDiariasDez',fld:'DIRFDIARIASDEZ'},{av:'A11537DirfDiarias13',fld:'DIRFDIARIAS13'},{av:'A11529DirfDiariasMai',fld:'DIRFDIARIASMAI'}],[{av:'AV77filtros',fld:'vFILTROS'},{av:'AV126DirfRendimentoJan',fld:'vDIRFRENDIMENTOJAN'},{av:'AV125DirfRendimentoFev',fld:'vDIRFRENDIMENTOFEV'},{av:'AV130DirfRendimentoMar',fld:'vDIRFRENDIMENTOMAR'},{av:'AV122DirfRendimentoAbr',fld:'vDIRFRENDIMENTOABR'},{av:'AV129DirfRendimentoMai',fld:'vDIRFRENDIMENTOMAI'},{av:'AV128DirfRendimentoJun',fld:'vDIRFRENDIMENTOJUN'},{av:'AV127DirfRendimentoJul',fld:'vDIRFRENDIMENTOJUL'},{av:'AV123DirfRendimentoAgo',fld:'vDIRFRENDIMENTOAGO'},{av:'AV133DirfRendimentoSet',fld:'vDIRFRENDIMENTOSET'},{av:'AV132DirfRendimentoOut',fld:'vDIRFRENDIMENTOOUT'},{av:'AV131DirfRendimentoNov',fld:'vDIRFRENDIMENTONOV'},{av:'AV124DirfRendimentoDez',fld:'vDIRFRENDIMENTODEZ'},{av:'AV134DirfRendimento13',fld:'vDIRFRENDIMENTO13'},{av:'AV67DirfRendimentoTotalAnual',fld:'vDIRFRENDIMENTOTOTALANUAL'},{av:'AV114DirfPrevOficialJan',fld:'vDIRFPREVOFICIALJAN'},{av:'AV113DirfPrevOficialFev',fld:'vDIRFPREVOFICIALFEV'},{av:'AV118DirfPrevOficialMar',fld:'vDIRFPREVOFICIALMAR'},{av:'AV110DirfPrevOficialAbr',fld:'vDIRFPREVOFICIALABR'},{av:'AV117DirfPrevOficialMai',fld:'vDIRFPREVOFICIALMAI'},{av:'AV116DirfPrevOficialJun',fld:'vDIRFPREVOFICIALJUN'},{av:'AV115DirfPrevOficialJul',fld:'vDIRFPREVOFICIALJUL'},{av:'AV111DirfPrevOficialAgo',fld:'vDIRFPREVOFICIALAGO'},{av:'AV121DirfPrevOficialSet',fld:'vDIRFPREVOFICIALSET'},{av:'AV120DirfPrevOficialOut',fld:'vDIRFPREVOFICIALOUT'},{av:'AV119DirfPrevOficialNov',fld:'vDIRFPREVOFICIALNOV'},{av:'AV112DirfPrevOficialDez',fld:'vDIRFPREVOFICIALDEZ'},{av:'AV136DirfPrevOficial13',fld:'vDIRFPREVOFICIAL13'},{av:'AV68DirfPrevOficialTotalAnual',fld:'vDIRFPREVOFICIALTOTALANUAL'},{av:'AV102DirfImpRetidoJan',fld:'vDIRFIMPRETIDOJAN'},{av:'AV101DirfImpRetidoFev',fld:'vDIRFIMPRETIDOFEV'},{av:'AV106DirfImpRetidoMar',fld:'vDIRFIMPRETIDOMAR'},{av:'AV98DirfImpRetidoAbr',fld:'vDIRFIMPRETIDOABR'},{av:'AV105DirfImpRetidoMai',fld:'vDIRFIMPRETIDOMAI'},{av:'AV104DirfImpRetidoJun',fld:'vDIRFIMPRETIDOJUN'},{av:'AV103DirfImpRetidoJul',fld:'vDIRFIMPRETIDOJUL'},{av:'AV99DirfImpRetidoAgo',fld:'vDIRFIMPRETIDOAGO'},{av:'AV109DirfImpRetidoSet',fld:'vDIRFIMPRETIDOSET'},{av:'AV108DirfImpRetidoOut',fld:'vDIRFIMPRETIDOOUT'},{av:'AV107DirfImpRetidoNov',fld:'vDIRFIMPRETIDONOV'},{av:'AV100DirfImpRetidoDez',fld:'vDIRFIMPRETIDODEZ'},{av:'AV135DirfImpRetido13',fld:'vDIRFIMPRETIDO13'},{av:'AV69DirfImpRetidoTotalAnual',fld:'vDIRFIMPRETIDOTOTALANUAL'},{av:'AV137DirfDiariasJan',fld:'vDIRFDIARIASJAN'},{av:'AV138DirfDiariasFev',fld:'vDIRFDIARIASFEV'},{av:'AV139DirfDiariasMar',fld:'vDIRFDIARIASMAR'},{av:'AV140DirfDiariasAbr',fld:'vDIRFDIARIASABR'},{av:'AV141DirfDiariasMai',fld:'vDIRFDIARIASMAI'},{av:'AV142DirfDiariasJun',fld:'vDIRFDIARIASJUN'},{av:'AV143DirfDiariasJul',fld:'vDIRFDIARIASJUL'},{av:'AV144DirfDiariasAgo',fld:'vDIRFDIARIASAGO'},{av:'AV145DirfDiariasSet',fld:'vDIRFDIARIASSET'},{av:'AV146DirfDiariasOut',fld:'vDIRFDIARIASOUT'},{av:'AV147DirfDiariasNov',fld:'vDIRFDIARIASNOV'},{av:'AV148DirfDiariasDez',fld:'vDIRFDIARIASDEZ'},{av:'AV149DirfDiarias13',fld:'vDIRFDIARIAS13'},{av:'AV151DirfDiariasTotalAnual',fld:'vDIRFDIARIASTOTALANUAL'},{av:'AV70SnErro',fld:'vSNERRO'},{av:'AV96DirfEmpresaId',fld:'vDIRFEMPRESAID'},{av:'AV97DirfCPFCNPJ',fld:'vDIRFCPFCNPJ'}]];
   this.EvtParms["'ABRIRCONTASDIRF'"] = [[{av:'AV72DirfCPF',fld:'vDIRFCPF'},{av:'AV70SnErro',fld:'vSNERRO'},{av:'AV74DirfAnoRetencao',fld:'vDIRFANORETENCAO'},{av:'AV75RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV91RetencaoDescricao',fld:'vRETENCAODESCRICAO'},{av:'AV90DirfNome',fld:'vDIRFNOME'},{av:'AV73DirfCNPJ',fld:'vDIRFCNPJ'},{av:'AV87DirfNome2',fld:'vDIRFNOME2'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV154Pgmname',fld:'vPGMNAME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV90DirfNome',fld:'vDIRFNOME'},{av:'AV72DirfCPF',fld:'vDIRFCPF'},{av:'AV91RetencaoDescricao',fld:'vRETENCAODESCRICAO'},{av:'AV75RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV74DirfAnoRetencao',fld:'vDIRFANORETENCAO'},{av:'AV87DirfNome2',fld:'vDIRFNOME2'},{av:'AV73DirfCNPJ',fld:'vDIRFCNPJ'},{av:'AV77filtros',fld:'vFILTROS'},{av:'AV70SnErro',fld:'vSNERRO'},{av:'AV96DirfEmpresaId',fld:'vDIRFEMPRESAID'},{av:'AV97DirfCPFCNPJ',fld:'vDIRFCPFCNPJ'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV72DirfCPF',fld:'vDIRFCPF'},{av:'AV70SnErro',fld:'vSNERRO'},{av:'AV74DirfAnoRetencao',fld:'vDIRFANORETENCAO'},{av:'AV78RetencaoTipo',fld:'vRETENCAOTIPO'},{av:'AV75RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV73DirfCNPJ',fld:'vDIRFCNPJ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV91RetencaoDescricao',fld:'vRETENCAODESCRICAO'},{av:'AV90DirfNome',fld:'vDIRFNOME'},{av:'AV87DirfNome2',fld:'vDIRFNOME2'},{av:'AV154Pgmname',fld:'vPGMNAME'}],[{av:'AV72DirfCPF',fld:'vDIRFCPF'},{av:'AV75RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV78RetencaoTipo',fld:'vRETENCAOTIPO'},{av:'AV74DirfAnoRetencao',fld:'vDIRFANORETENCAO'},{av:'AV73DirfCNPJ',fld:'vDIRFCNPJ'},{av:'AV77filtros',fld:'vFILTROS'},{av:'AV70SnErro',fld:'vSNERRO'},{av:'AV96DirfEmpresaId',fld:'vDIRFEMPRESAID'},{av:'AV97DirfCPFCNPJ',fld:'vDIRFCPFCNPJ'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV72DirfCPF',fld:'vDIRFCPF'},{av:'AV70SnErro',fld:'vSNERRO'},{av:'AV74DirfAnoRetencao',fld:'vDIRFANORETENCAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV78RetencaoTipo',fld:'vRETENCAOTIPO'},{av:'AV75RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV95EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV73DirfCNPJ',fld:'vDIRFCNPJ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV91RetencaoDescricao',fld:'vRETENCAODESCRICAO'},{av:'AV90DirfNome',fld:'vDIRFNOME'},{av:'AV87DirfNome2',fld:'vDIRFNOME2'},{av:'AV154Pgmname',fld:'vPGMNAME'}],[{av:'AV95EmpresaPadraoConta',fld:'vEMPRESAPADRAOCONTA'},{av:'AV72DirfCPF',fld:'vDIRFCPF'},{av:'AV75RetencaoCodigo',fld:'vRETENCAOCODIGO'},{av:'AV78RetencaoTipo',fld:'vRETENCAOTIPO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV73DirfCNPJ',fld:'vDIRFCNPJ'},{av:'AV77filtros',fld:'vFILTROS'},{av:'AV70SnErro',fld:'vSNERRO'},{av:'AV96DirfEmpresaId',fld:'vDIRFEMPRESAID'},{av:'AV97DirfCPFCNPJ',fld:'vDIRFCPFCNPJ'},{av:'AV126DirfRendimentoJan',fld:'vDIRFRENDIMENTOJAN'},{av:'AV125DirfRendimentoFev',fld:'vDIRFRENDIMENTOFEV'},{av:'AV130DirfRendimentoMar',fld:'vDIRFRENDIMENTOMAR'},{av:'AV122DirfRendimentoAbr',fld:'vDIRFRENDIMENTOABR'},{av:'AV129DirfRendimentoMai',fld:'vDIRFRENDIMENTOMAI'},{av:'AV128DirfRendimentoJun',fld:'vDIRFRENDIMENTOJUN'},{av:'AV127DirfRendimentoJul',fld:'vDIRFRENDIMENTOJUL'},{av:'AV123DirfRendimentoAgo',fld:'vDIRFRENDIMENTOAGO'},{av:'AV133DirfRendimentoSet',fld:'vDIRFRENDIMENTOSET'},{av:'AV132DirfRendimentoOut',fld:'vDIRFRENDIMENTOOUT'},{av:'AV131DirfRendimentoNov',fld:'vDIRFRENDIMENTONOV'},{av:'AV124DirfRendimentoDez',fld:'vDIRFRENDIMENTODEZ'},{av:'AV134DirfRendimento13',fld:'vDIRFRENDIMENTO13'},{av:'AV67DirfRendimentoTotalAnual',fld:'vDIRFRENDIMENTOTOTALANUAL'},{av:'AV114DirfPrevOficialJan',fld:'vDIRFPREVOFICIALJAN'},{av:'AV113DirfPrevOficialFev',fld:'vDIRFPREVOFICIALFEV'},{av:'AV118DirfPrevOficialMar',fld:'vDIRFPREVOFICIALMAR'},{av:'AV110DirfPrevOficialAbr',fld:'vDIRFPREVOFICIALABR'},{av:'AV117DirfPrevOficialMai',fld:'vDIRFPREVOFICIALMAI'},{av:'AV116DirfPrevOficialJun',fld:'vDIRFPREVOFICIALJUN'},{av:'AV115DirfPrevOficialJul',fld:'vDIRFPREVOFICIALJUL'},{av:'AV111DirfPrevOficialAgo',fld:'vDIRFPREVOFICIALAGO'},{av:'AV121DirfPrevOficialSet',fld:'vDIRFPREVOFICIALSET'},{av:'AV120DirfPrevOficialOut',fld:'vDIRFPREVOFICIALOUT'},{av:'AV119DirfPrevOficialNov',fld:'vDIRFPREVOFICIALNOV'},{av:'AV112DirfPrevOficialDez',fld:'vDIRFPREVOFICIALDEZ'},{av:'AV136DirfPrevOficial13',fld:'vDIRFPREVOFICIAL13'},{av:'AV68DirfPrevOficialTotalAnual',fld:'vDIRFPREVOFICIALTOTALANUAL'},{av:'AV102DirfImpRetidoJan',fld:'vDIRFIMPRETIDOJAN'},{av:'AV101DirfImpRetidoFev',fld:'vDIRFIMPRETIDOFEV'},{av:'AV106DirfImpRetidoMar',fld:'vDIRFIMPRETIDOMAR'},{av:'AV98DirfImpRetidoAbr',fld:'vDIRFIMPRETIDOABR'},{av:'AV105DirfImpRetidoMai',fld:'vDIRFIMPRETIDOMAI'},{av:'AV104DirfImpRetidoJun',fld:'vDIRFIMPRETIDOJUN'},{av:'AV103DirfImpRetidoJul',fld:'vDIRFIMPRETIDOJUL'},{av:'AV99DirfImpRetidoAgo',fld:'vDIRFIMPRETIDOAGO'},{av:'AV109DirfImpRetidoSet',fld:'vDIRFIMPRETIDOSET'},{av:'AV108DirfImpRetidoOut',fld:'vDIRFIMPRETIDOOUT'},{av:'AV107DirfImpRetidoNov',fld:'vDIRFIMPRETIDONOV'},{av:'AV100DirfImpRetidoDez',fld:'vDIRFIMPRETIDODEZ'},{av:'AV135DirfImpRetido13',fld:'vDIRFIMPRETIDO13'},{av:'AV69DirfImpRetidoTotalAnual',fld:'vDIRFIMPRETIDOTOTALANUAL'}]];
   this.setPrompt("PROMPT_RETENCAOCODIGO", [24]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdirf());
