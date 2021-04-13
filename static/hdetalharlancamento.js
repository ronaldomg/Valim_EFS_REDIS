/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:0:59.91
*/
gx.evt.autoSkip = false;
gx.define('hdetalharlancamento', false, function () {
   this.ServerClass =  "hdetalharlancamento" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV65TipoLancamento=gx.fn.getControlValue("vTIPOLANCAMENTO") ;
   };
   this.Validv_Seqlancamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQLANCAMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Seqitemlancamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQITEMLANCAMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contacontabil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABIL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Correntista=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCORRENTISTA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Itemlancamentoccusid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(134) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("ITEMLANCAMENTOCCUSID", gx.fn.currentGridRowImpl(134));
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
   this.Validv_Seqitem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSEQITEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      if ( this.AV94TpCenCus == "D" )
      {
         this.AV95SeqItem = gx.num.trunc( this.AV66SeqItemLancamento ,0) ;
      }
      else
      {
         if ( (""==this.AV78ContaContabilId2) )
         {
            this.AV95SeqItem = gx.num.trunc( this.AV66SeqItemLancamento ,0) ;
         }
         else
         {
            this.AV95SeqItem = gx.num.trunc( this.AV85ItensLancamentoContabilParDob ,0) ;
         }
      }
   };
   this.e111v2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e121v2_client=function()
   {
      this.executeServerEvent("VTPCENCUS.CLICK", true, null, false, true);
   };
   this.e161v2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e171v2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,27,30,32,35,37,39,41,43,46,49,51,54,56,58,65,68,70,73,75,77,79,81,84,87,89,92,94,96,103,106,108,111,113,116,118,119,120,125,128,130,133,135,136,137,138,141,142];
   this.GXLastCtrlId =142;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",134,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hdetalharlancamento",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(345,135,"ITEMLANCAMENTOCCUSID","Centro de Custo","","ItemLancamentoCCusId","svchar",0,"px",30,30,"left",null,[],345,"ItemLancamentoCCusId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(340,136,"ITEMLANCAMENTOCCUSDESCRICAO","Descrição","","ItemLancamentoCCusDescricao","svchar",0,"px",35,35,"left",null,[],340,"ItemLancamentoCCusDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(53,137,"LANCAMENTOCENTROCUSTOVALOR","Valor","","LancamentoCentroCustoValor","decimal",0,"px",18,18,"right",null,[],53,"LancamentoCentroCustoValor",true,2,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATALANCAMENTO",gxz:"ZV68DataLancamento",gxold:"OV68DataLancamento",gxvar:"AV68DataLancamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68DataLancamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV68DataLancamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATALANCAMENTO",gx.O.AV68DataLancamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV68DataLancamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATALANCAMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 13 , function() {
   });
   GXValidFnc[15]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE3",grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Seqlancamento,isvalid:null,rgrid:[this.GridContainer],fld:"vSEQLANCAMENTO",gxz:"ZV67SeqLancamento",gxold:"OV67SeqLancamento",gxvar:"AV67SeqLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67SeqLancamento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67SeqLancamento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQLANCAMENTO",gx.O.AV67SeqLancamento,0)},c2v:function(){gx.O.AV67SeqLancamento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQLANCAMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Seqitemlancamento,isvalid:null,rgrid:[],fld:"vSEQITEMLANCAMENTO",gxz:"ZV66SeqItemLancamento",gxold:"OV66SeqItemLancamento",gxvar:"AV66SeqItemLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66SeqItemLancamento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66SeqItemLancamento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQITEMLANCAMENTO",gx.O.AV66SeqItemLancamento,0)},c2v:function(){gx.O.AV66SeqItemLancamento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQITEMLANCAMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE12",grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTIPOCONTA",gxz:"ZV70DescTipoConta",gxold:"OV70DescTipoConta",gxvar:"AV70DescTipoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70DescTipoConta=Value},v2z:function(Value){gx.O.ZV70DescTipoConta=Value},v2c:function(){gx.fn.setControlValue("vDESCTIPOCONTA",gx.O.AV70DescTipoConta,0)},c2v:function(){gx.O.AV70DescTipoConta=this.val()},val:function(){return gx.fn.getControlValue("vDESCTIPOCONTA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE6",grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Contacontabil,isvalid:null,rgrid:[],fld:"vCONTACONTABIL",gxz:"ZV71ContaContabil",gxold:"OV71ContaContabil",gxvar:"AV71ContaContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71ContaContabil=Value},v2z:function(Value){gx.O.ZV71ContaContabil=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABIL",gx.O.AV71ContaContabil,0)},c2v:function(){gx.O.AV71ContaContabil=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABIL")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCCONTACONTABIL",gxz:"ZV72DescContaContabil",gxold:"OV72DescContaContabil",gxvar:"AV72DescContaContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72DescContaContabil=Value},v2z:function(Value){gx.O.ZV72DescContaContabil=Value},v2c:function(){gx.fn.setControlValue("vDESCCONTACONTABIL",gx.O.AV72DescContaContabil,0)},c2v:function(){gx.O.AV72DescContaContabil=this.val()},val:function(){return gx.fn.getControlValue("vDESCCONTACONTABIL")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[43]={fld:"TABLE4",grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:7,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV80ContaContabilTradutor",gxold:"OV80ContaContabilTradutor",gxvar:"AV80ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80ContaContabilTradutor=Value},v2z:function(Value){gx.O.ZV80ContaContabilTradutor=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTOR",gx.O.AV80ContaContabilTradutor,0)},c2v:function(){gx.O.AV80ContaContabilTradutor=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILTRADUTOR")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[51]={fld:"TABLE9",grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Correntista,isvalid:null,rgrid:[],fld:"vCORRENTISTA",gxz:"ZV26Correntista",gxold:"OV26Correntista",gxvar:"AV26Correntista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26Correntista=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26Correntista=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORRENTISTA",gx.O.AV26Correntista,0)},c2v:function(){gx.O.AV26Correntista=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORRENTISTA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECORRENTISTA",gxz:"ZV54NomeCorrentista",gxold:"OV54NomeCorrentista",gxvar:"AV54NomeCorrentista",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54NomeCorrentista=Value},v2z:function(Value){gx.O.ZV54NomeCorrentista=Value},v2c:function(){gx.fn.setControlValue("vNOMECORRENTISTA",gx.O.AV54NomeCorrentista,0)},c2v:function(){gx.O.AV54NomeCorrentista=this.val()},val:function(){return gx.fn.getControlValue("vNOMECORRENTISTA")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TABLE15",grid:0};
   GXValidFnc[68]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCTIPOCONTA2",gxz:"ZV77DescTipoConta2",gxold:"OV77DescTipoConta2",gxvar:"AV77DescTipoConta2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77DescTipoConta2=Value},v2z:function(Value){gx.O.ZV77DescTipoConta2=Value},v2c:function(){gx.fn.setControlValue("vDESCTIPOCONTA2",gx.O.AV77DescTipoConta2,0)},c2v:function(){gx.O.AV77DescTipoConta2=this.val()},val:function(){return gx.fn.getControlValue("vDESCTIPOCONTA2")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TABLE7",grid:0};
   GXValidFnc[73]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILID2",gxz:"ZV78ContaContabilId2",gxold:"OV78ContaContabilId2",gxvar:"AV78ContaContabilId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78ContaContabilId2=Value},v2z:function(Value){gx.O.ZV78ContaContabilId2=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID2",gx.O.AV78ContaContabilId2,0)},c2v:function(){gx.O.AV78ContaContabilId2=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID2")},nac:gx.falseFn};
   GXValidFnc[75]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCCONTACONTABIL2",gxz:"ZV79DescContaContabil2",gxold:"OV79DescContaContabil2",gxvar:"AV79DescContaContabil2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79DescContaContabil2=Value},v2z:function(Value){gx.O.ZV79DescContaContabil2=Value},v2c:function(){gx.fn.setControlValue("vDESCCONTACONTABIL2",gx.O.AV79DescContaContabil2,0)},c2v:function(){gx.O.AV79DescContaContabil2=this.val()},val:function(){return gx.fn.getControlValue("vDESCCONTACONTABIL2")},nac:gx.falseFn};
   GXValidFnc[79]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[81]={fld:"TABLE5",grid:0};
   GXValidFnc[84]={lvl:0,type:"char",len:7,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR2STR",gxz:"ZV86ContaContabilTradutor2Str",gxold:"OV86ContaContabilTradutor2Str",gxvar:"AV86ContaContabilTradutor2Str",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86ContaContabilTradutor2Str=Value},v2z:function(Value){gx.O.ZV86ContaContabilTradutor2Str=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTOR2STR",gx.O.AV86ContaContabilTradutor2Str,0)},c2v:function(){gx.O.AV86ContaContabilTradutor2Str=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILTRADUTOR2STR")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[89]={fld:"TABLE8",grid:0};
   GXValidFnc[92]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID2",gxz:"ZV83PessoaId2",gxold:"OV83PessoaId2",gxvar:"AV83PessoaId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83PessoaId2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83PessoaId2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID2",gx.O.AV83PessoaId2,0)},c2v:function(){gx.O.AV83PessoaId2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID2",'.')},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL2",gxz:"ZV93PessoaRazaoSocial2",gxold:"OV93PessoaRazaoSocial2",gxvar:"AV93PessoaRazaoSocial2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93PessoaRazaoSocial2=Value},v2z:function(Value){gx.O.ZV93PessoaRazaoSocial2=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL2",gx.O.AV93PessoaRazaoSocial2,0)},c2v:function(){gx.O.AV93PessoaRazaoSocial2=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL2")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TABLE11",grid:0};
   GXValidFnc[106]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORLANCAMENTO",gxz:"ZV69ValorLancamento",gxold:"OV69ValorLancamento",gxvar:"AV69ValorLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69ValorLancamento=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV69ValorLancamento=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORLANCAMENTO",gx.O.AV69ValorLancamento,2,',')},c2v:function(){gx.O.AV69ValorLancamento=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORLANCAMENTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[111]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[113]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOID",gxz:"ZV74HistoricoId",gxold:"OV74HistoricoId",gxvar:"AV74HistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74HistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV74HistoricoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOID",gx.O.AV74HistoricoId,0)},c2v:function(){gx.O.AV74HistoricoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOID",'.')},nac:gx.falseFn};
   GXValidFnc[116]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[118]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[119]={lvl:0,type:"svchar",len:180,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vITENSLANCAMENTOCONTABILHISTORICO",gxz:"ZV73ItensLancamentoContabilHistorico",gxold:"OV73ItensLancamentoContabilHistorico",gxvar:"AV73ItensLancamentoContabilHistorico",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73ItensLancamentoContabilHistorico=Value},v2z:function(Value){gx.O.ZV73ItensLancamentoContabilHistorico=Value},v2c:function(){gx.fn.setControlValue("vITENSLANCAMENTOCONTABILHISTORICO",gx.O.AV73ItensLancamentoContabilHistorico,0)},c2v:function(){gx.O.AV73ItensLancamentoContabilHistorico=this.val()},val:function(){return gx.fn.getControlValue("vITENSLANCAMENTOCONTABILHISTORICO")},nac:gx.falseFn};
   GXValidFnc[120]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[125]={fld:"TABLE13",grid:0};
   GXValidFnc[128]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTPCENCUS",gxz:"ZV94TpCenCus",gxold:"OV94TpCenCus",gxvar:"AV94TpCenCus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV94TpCenCus=Value},v2z:function(Value){gx.O.ZV94TpCenCus=Value},v2c:function(){gx.fn.setComboBoxValue("vTPCENCUS",gx.O.AV94TpCenCus)},c2v:function(){gx.O.AV94TpCenCus=this.val()},val:function(){return gx.fn.getControlValue("vTPCENCUS")},nac:gx.falseFn};
   GXValidFnc[133]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[135]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:134,gxgrid:this.GridContainer,fnc:this.Valid_Itemlancamentoccusid,isvalid:null,rgrid:[],fld:"ITEMLANCAMENTOCCUSID",gxz:"Z345ItemLancamentoCCusId",gxold:"O345ItemLancamentoCCusId",gxvar:"A345ItemLancamentoCCusId",ucs:[],op:[136],ip:[136,135],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A345ItemLancamentoCCusId=Value},v2z:function(Value){gx.O.Z345ItemLancamentoCCusId=Value},v2c:function(row){gx.fn.setGridControlValue("ITEMLANCAMENTOCCUSID",row || gx.fn.currentGridRowImpl(134),gx.O.A345ItemLancamentoCCusId,0)},c2v:function(){gx.O.A345ItemLancamentoCCusId=this.val()},val:function(row){return gx.fn.getGridControlValue("ITEMLANCAMENTOCCUSID",row || gx.fn.currentGridRowImpl(134))},nac:gx.falseFn};
   GXValidFnc[136]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:134,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"ITEMLANCAMENTOCCUSDESCRICAO",gxz:"Z340ItemLancamentoCCusDescricao",gxold:"O340ItemLancamentoCCusDescricao",gxvar:"A340ItemLancamentoCCusDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A340ItemLancamentoCCusDescricao=Value},v2z:function(Value){gx.O.Z340ItemLancamentoCCusDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("ITEMLANCAMENTOCCUSDESCRICAO",row || gx.fn.currentGridRowImpl(134),gx.O.A340ItemLancamentoCCusDescricao,0)},c2v:function(){gx.O.A340ItemLancamentoCCusDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("ITEMLANCAMENTOCCUSDESCRICAO",row || gx.fn.currentGridRowImpl(134))},nac:gx.falseFn};
   GXValidFnc[137]={lvl:2,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:134,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCENTROCUSTOVALOR",gxz:"Z53LancamentoCentroCustoValor",gxold:"O53LancamentoCentroCustoValor",gxvar:"A53LancamentoCentroCustoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A53LancamentoCentroCustoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z53LancamentoCentroCustoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LANCAMENTOCENTROCUSTOVALOR",row || gx.fn.currentGridRowImpl(134),gx.O.A53LancamentoCentroCustoValor,2,',')},c2v:function(){gx.O.A53LancamentoCentroCustoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LANCAMENTOCENTROCUSTOVALOR",row || gx.fn.currentGridRowImpl(134),'.',',')},nac:gx.falseFn};
   GXValidFnc[138]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[141]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vITENSLANCAMENTOCONTABILPARDOB",gxz:"ZV85ItensLancamentoContabilParDob",gxold:"OV85ItensLancamentoContabilParDob",gxvar:"AV85ItensLancamentoContabilParDob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85ItensLancamentoContabilParDob=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV85ItensLancamentoContabilParDob=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vITENSLANCAMENTOCONTABILPARDOB",gx.O.AV85ItensLancamentoContabilParDob,0)},c2v:function(){gx.O.AV85ItensLancamentoContabilParDob=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vITENSLANCAMENTOCONTABILPARDOB",'.')},nac:gx.falseFn};
   GXValidFnc[142]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Seqitem,isvalid:null,rgrid:[this.GridContainer],fld:"vSEQITEM",gxz:"ZV95SeqItem",gxold:"OV95SeqItem",gxvar:"AV95SeqItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95SeqItem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV95SeqItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSEQITEM",gx.O.AV95SeqItem,0)},c2v:function(){gx.O.AV95SeqItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSEQITEM",'.')},nac:gx.falseFn};
   this.AV68DataLancamento = gx.date.nullDate() ;
   this.ZV68DataLancamento = gx.date.nullDate() ;
   this.OV68DataLancamento = gx.date.nullDate() ;
   this.AV67SeqLancamento = 0 ;
   this.ZV67SeqLancamento = 0 ;
   this.OV67SeqLancamento = 0 ;
   this.AV66SeqItemLancamento = 0 ;
   this.ZV66SeqItemLancamento = 0 ;
   this.OV66SeqItemLancamento = 0 ;
   this.AV70DescTipoConta = "" ;
   this.ZV70DescTipoConta = "" ;
   this.OV70DescTipoConta = "" ;
   this.AV71ContaContabil = "" ;
   this.ZV71ContaContabil = "" ;
   this.OV71ContaContabil = "" ;
   this.AV72DescContaContabil = "" ;
   this.ZV72DescContaContabil = "" ;
   this.OV72DescContaContabil = "" ;
   this.AV80ContaContabilTradutor = "" ;
   this.ZV80ContaContabilTradutor = "" ;
   this.OV80ContaContabilTradutor = "" ;
   this.AV26Correntista = 0 ;
   this.ZV26Correntista = 0 ;
   this.OV26Correntista = 0 ;
   this.AV54NomeCorrentista = "" ;
   this.ZV54NomeCorrentista = "" ;
   this.OV54NomeCorrentista = "" ;
   this.AV77DescTipoConta2 = "" ;
   this.ZV77DescTipoConta2 = "" ;
   this.OV77DescTipoConta2 = "" ;
   this.AV78ContaContabilId2 = "" ;
   this.ZV78ContaContabilId2 = "" ;
   this.OV78ContaContabilId2 = "" ;
   this.AV79DescContaContabil2 = "" ;
   this.ZV79DescContaContabil2 = "" ;
   this.OV79DescContaContabil2 = "" ;
   this.AV86ContaContabilTradutor2Str = "" ;
   this.ZV86ContaContabilTradutor2Str = "" ;
   this.OV86ContaContabilTradutor2Str = "" ;
   this.AV83PessoaId2 = 0 ;
   this.ZV83PessoaId2 = 0 ;
   this.OV83PessoaId2 = 0 ;
   this.AV93PessoaRazaoSocial2 = "" ;
   this.ZV93PessoaRazaoSocial2 = "" ;
   this.OV93PessoaRazaoSocial2 = "" ;
   this.AV69ValorLancamento = 0 ;
   this.ZV69ValorLancamento = 0 ;
   this.OV69ValorLancamento = 0 ;
   this.AV74HistoricoId = 0 ;
   this.ZV74HistoricoId = 0 ;
   this.OV74HistoricoId = 0 ;
   this.AV73ItensLancamentoContabilHistorico = "" ;
   this.ZV73ItensLancamentoContabilHistorico = "" ;
   this.OV73ItensLancamentoContabilHistorico = "" ;
   this.AV94TpCenCus = "" ;
   this.ZV94TpCenCus = "" ;
   this.OV94TpCenCus = "" ;
   this.Z345ItemLancamentoCCusId = "" ;
   this.O345ItemLancamentoCCusId = "" ;
   this.Z340ItemLancamentoCCusDescricao = "" ;
   this.O340ItemLancamentoCCusDescricao = "" ;
   this.Z53LancamentoCentroCustoValor = 0 ;
   this.O53LancamentoCentroCustoValor = 0 ;
   this.AV85ItensLancamentoContabilParDob = 0 ;
   this.ZV85ItensLancamentoContabilParDob = 0 ;
   this.OV85ItensLancamentoContabilParDob = 0 ;
   this.AV95SeqItem = 0 ;
   this.ZV95SeqItem = 0 ;
   this.OV95SeqItem = 0 ;
   this.AV68DataLancamento = gx.date.nullDate() ;
   this.AV67SeqLancamento = 0 ;
   this.AV66SeqItemLancamento = 0 ;
   this.AV70DescTipoConta = "" ;
   this.AV71ContaContabil = "" ;
   this.AV72DescContaContabil = "" ;
   this.AV80ContaContabilTradutor = "" ;
   this.AV26Correntista = 0 ;
   this.AV54NomeCorrentista = "" ;
   this.AV77DescTipoConta2 = "" ;
   this.AV78ContaContabilId2 = "" ;
   this.AV79DescContaContabil2 = "" ;
   this.AV86ContaContabilTradutor2Str = "" ;
   this.AV83PessoaId2 = 0 ;
   this.AV93PessoaRazaoSocial2 = "" ;
   this.AV69ValorLancamento = 0 ;
   this.AV74HistoricoId = 0 ;
   this.AV73ItensLancamentoContabilHistorico = "" ;
   this.AV94TpCenCus = "" ;
   this.AV85ItensLancamentoContabilParDob = 0 ;
   this.AV95SeqItem = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV65TipoLancamento = "" ;
   this.A68ItensLancamentoContabilDebCre = "" ;
   this.A67ItensLancamentoContabilSequenc = 0 ;
   this.A61LancamentoContabilId = 0 ;
   this.A341LancamentoContabilEmpresaid = "" ;
   this.A344ItemLancamentoCCusEmpresaId = "" ;
   this.A345ItemLancamentoCCusId = "" ;
   this.A340ItemLancamentoCCusDescricao = "" ;
   this.A53LancamentoCentroCustoValor = 0 ;
   this.A337ItensLancamentoContabilParDob = 0 ;
   this.A62ContaContabilId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A66ItensLancamentoContabilValor = 0 ;
   this.A336ItensLancamentoContabilHistori = "" ;
   this.A284HistoricoId = 0 ;
   this.Events = {"e111v2_client": ["'FECHAR'", true] ,"e121v2_client": ["VTPCENCUS.CLICK", true] ,"e161v2_client": ["ENTER", true] ,"e171v2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV95SeqItem',fld:'vSEQITEM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV67SeqLancamento',fld:'vSEQLANCAMENTO'},{av:'AV78ContaContabilId2',fld:'vCONTACONTABILID2'},{av:'AV94TpCenCus',fld:'vTPCENCUS'},{av:'AV66SeqItemLancamento',fld:'vSEQITEMLANCAMENTO'},{av:'AV85ItensLancamentoContabilParDob',fld:'vITENSLANCAMENTOCONTABILPARDOB'}],[{ctrl:'vTPCENCUS'},{av:'AV95SeqItem',fld:'vSEQITEM'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV65TipoLancamento',fld:'vTIPOLANCAMENTO'},{av:'AV66SeqItemLancamento',fld:'vSEQITEMLANCAMENTO'},{av:'AV67SeqLancamento',fld:'vSEQLANCAMENTO'},{av:'AV68DataLancamento',fld:'vDATALANCAMENTO'},{av:'AV71ContaContabil',fld:'vCONTACONTABIL'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.EvtParms["VTPCENCUS.CLICK"] = [[{av:'AV94TpCenCus',fld:'vTPCENCUS'},{av:'AV66SeqItemLancamento',fld:'vSEQITEMLANCAMENTO'},{av:'AV78ContaContabilId2',fld:'vCONTACONTABILID2'},{av:'AV85ItensLancamentoContabilParDob',fld:'vITENSLANCAMENTOCONTABILPARDOB'}],[{av:'AV95SeqItem',fld:'vSEQITEM'}]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV65TipoLancamento", "vTIPOLANCAMENTO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[130]);
   GridContainer.addRefreshingVar(this.GXValidFnc[142]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[141]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdetalharlancamento());
