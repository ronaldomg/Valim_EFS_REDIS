/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:10:34.0
*/
gx.evt.autoSkip = false;
gx.define('hemiteetiquetalocal', false, function () {
   this.ServerClass =  "hemiteetiquetalocal" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
   };
   this.s122_client=function()
   {
      this.AV12isErro =  false  ;
      if ( (0==this.AV6Desc1) && (0==this.AV7Desc2) && (0==this.AV8Desc3) && (0==this.AV9Desc4) && (0==this.AV68Desc4Fin) && (0==this.AV10Desc5) && (0==this.AV66Desc5Fin) )
      {
         this.addMessage("Informe o campo "+gx.fn.getCtrlProperty("DESC1","Caption"));
         this.AV12isErro =  true  ;
         gx.fn.usrSetFocus("vDESC1") ;
      }
      if ( ! this.AV12isErro )
      {
         if ( (0==this.AV6Desc1) && ( ! (0==this.AV7Desc2) || ! (0==this.AV8Desc3) || ! (0==this.AV9Desc4) || ! (0==this.AV68Desc4Fin) || ! (0==this.AV10Desc5) || ! (0==this.AV66Desc5Fin) ) )
         {
            this.addMessage("Informe o campo "+gx.fn.getCtrlProperty("DESC1","Caption"));
            this.AV12isErro =  true  ;
            gx.fn.usrSetFocus("vDESC1") ;
         }
      }
      if ( ! this.AV12isErro )
      {
         if ( (0==this.AV7Desc2) && ( ! (0==this.AV8Desc3) || ! (0==this.AV9Desc4) || (0==this.AV68Desc4Fin) || ! (0==this.AV10Desc5) || ! (0==this.AV66Desc5Fin) ) )
         {
            this.addMessage("Informe o campo "+gx.fn.getCtrlProperty("DESC2","Caption"));
            this.AV12isErro =  true  ;
            gx.fn.usrSetFocus("vDESC2") ;
         }
      }
      if ( ! this.AV12isErro )
      {
         if ( (0==this.AV8Desc3) && ( ! (0==this.AV9Desc4) || (0==this.AV68Desc4Fin) || ! (0==this.AV10Desc5) || ! (0==this.AV66Desc5Fin) ) )
         {
            this.addMessage("Informe o campo "+gx.fn.getCtrlProperty("DESC3","Caption"));
            this.AV12isErro =  true  ;
            gx.fn.usrSetFocus("vDESC3") ;
         }
      }
      if ( ! this.AV12isErro )
      {
         if ( ! (0==this.AV9Desc4) && (0==this.AV68Desc4Fin) )
         {
            this.AV68Desc4Fin = gx.num.trunc( this.AV9Desc4 ,0) ;
         }
         else if ( (0==this.AV9Desc4) && ! (0==this.AV68Desc4Fin) )
         {
            this.AV9Desc4 = gx.num.trunc( this.AV68Desc4Fin ,0) ;
         }
         else if ( ! (0==this.AV9Desc4) && ! (0==this.AV68Desc4Fin) )
         {
            if ( this.AV9Desc4 > this.AV68Desc4Fin )
            {
               this.addMessage(gx.fn.getCtrlProperty("DESC4","Caption")+" final deve ser maior que o inicial");
               this.AV12isErro =  true  ;
               gx.fn.usrSetFocus("vDESC4") ;
            }
         }
      }
      if ( ! this.AV12isErro )
      {
         if ( ! (0==this.AV10Desc5) && (0==this.AV66Desc5Fin) )
         {
            this.AV66Desc5Fin = gx.num.trunc( this.AV10Desc5 ,0) ;
         }
         else if ( (0==this.AV10Desc5) && ! (0==this.AV66Desc5Fin) )
         {
            this.AV10Desc5 = gx.num.trunc( this.AV66Desc5Fin ,0) ;
         }
         else if ( ! (0==this.AV10Desc5) && ! (0==this.AV66Desc5Fin) )
         {
            if ( this.AV10Desc5 > this.AV66Desc5Fin )
            {
               this.addMessage(gx.fn.getCtrlProperty("DESC5","Caption")+" final deve ser maior que o inicial");
               this.AV12isErro =  true  ;
               gx.fn.usrSetFocus("vDESC5") ;
            }
         }
      }
   };
   this.e112c82_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132c82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152c82_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,12,14,16,18,20,23,25,27,29,31,34,36,38,40,43,45,47,56,57,59];
   this.GXLastCtrlId =59;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TAB1",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[12]={fld:"DESC1", format:0,grid:0};
   GXValidFnc[14]={fld:"DESC2", format:0,grid:0};
   GXValidFnc[16]={fld:"DESC3", format:0,grid:0};
   GXValidFnc[18]={fld:"DESC4", format:0,grid:0};
   GXValidFnc[20]={fld:"DESC5", format:0,grid:0};
   GXValidFnc[23]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC1",gxz:"ZV6Desc1",gxold:"OV6Desc1",gxvar:"AV6Desc1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV6Desc1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6Desc1=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDESC1",gx.O.AV6Desc1)},c2v:function(){gx.O.AV6Desc1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDESC1",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC2",gxz:"ZV7Desc2",gxold:"OV7Desc2",gxvar:"AV7Desc2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7Desc2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7Desc2=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDESC2",gx.O.AV7Desc2)},c2v:function(){gx.O.AV7Desc2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDESC2",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC3",gxz:"ZV8Desc3",gxold:"OV8Desc3",gxvar:"AV8Desc3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8Desc3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8Desc3=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDESC3",gx.O.AV8Desc3)},c2v:function(){gx.O.AV8Desc3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDESC3",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TAB4",grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC4",gxz:"ZV9Desc4",gxold:"OV9Desc4",gxvar:"AV9Desc4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9Desc4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9Desc4=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDESC4",gx.O.AV9Desc4)},c2v:function(){gx.O.AV9Desc4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDESC4",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC4FIN",gxz:"ZV68Desc4Fin",gxold:"OV68Desc4Fin",gxvar:"AV68Desc4Fin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV68Desc4Fin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV68Desc4Fin=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDESC4FIN",gx.O.AV68Desc4Fin)},c2v:function(){gx.O.AV68Desc4Fin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDESC4FIN",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TAB5",grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC5",gxz:"ZV10Desc5",gxold:"OV10Desc5",gxvar:"AV10Desc5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10Desc5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10Desc5=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDESC5",gx.O.AV10Desc5)},c2v:function(){gx.O.AV10Desc5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDESC5",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESC5FIN",gxz:"ZV66Desc5Fin",gxold:"OV66Desc5Fin",gxvar:"AV66Desc5Fin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV66Desc5Fin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV66Desc5Fin=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vDESC5FIN",gx.O.AV66Desc5Fin)},c2v:function(){gx.O.AV66Desc5Fin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDESC5FIN",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV5AcessoSistemaSequencia",gxold:"OV5AcessoSistemaSequencia",gxvar:"AV5AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV5AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV5AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCOLUNAS",gxz:"ZV21QtColunas",gxold:"OV21QtColunas",gxvar:"AV21QtColunas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21QtColunas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21QtColunas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCOLUNAS",gx.O.AV21QtColunas,0)},c2v:function(){gx.O.AV21QtColunas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCOLUNAS",'.')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"BTNHELP",grid:0};
   this.AV6Desc1 = 0 ;
   this.ZV6Desc1 = 0 ;
   this.OV6Desc1 = 0 ;
   this.AV7Desc2 = 0 ;
   this.ZV7Desc2 = 0 ;
   this.OV7Desc2 = 0 ;
   this.AV8Desc3 = 0 ;
   this.ZV8Desc3 = 0 ;
   this.OV8Desc3 = 0 ;
   this.AV9Desc4 = 0 ;
   this.ZV9Desc4 = 0 ;
   this.OV9Desc4 = 0 ;
   this.AV68Desc4Fin = 0 ;
   this.ZV68Desc4Fin = 0 ;
   this.OV68Desc4Fin = 0 ;
   this.AV10Desc5 = 0 ;
   this.ZV10Desc5 = 0 ;
   this.OV10Desc5 = 0 ;
   this.AV66Desc5Fin = 0 ;
   this.ZV66Desc5Fin = 0 ;
   this.OV66Desc5Fin = 0 ;
   this.AV5AcessoSistemaSequencia = 0 ;
   this.ZV5AcessoSistemaSequencia = 0 ;
   this.OV5AcessoSistemaSequencia = 0 ;
   this.AV21QtColunas = 0 ;
   this.ZV21QtColunas = 0 ;
   this.OV21QtColunas = 0 ;
   this.AV6Desc1 = 0 ;
   this.AV7Desc2 = 0 ;
   this.AV8Desc3 = 0 ;
   this.AV9Desc4 = 0 ;
   this.AV68Desc4Fin = 0 ;
   this.AV10Desc5 = 0 ;
   this.AV66Desc5Fin = 0 ;
   this.AV5AcessoSistemaSequencia = 0 ;
   this.AV21QtColunas = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2938ValorAtributoDescricao = "" ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.AV12isErro = false ;
   this.Events = {"e112c82_client": ["'FECHAR'", true] ,"e132c82_client": ["ENTER", true] ,"e152c82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV5AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV12isErro',fld:'vISERRO'},{av:'AV6Desc1',fld:'vDESC1'},{av:'AV21QtColunas',fld:'vQTCOLUNAS'},{av:'AV7Desc2',fld:'vDESC2'},{av:'AV45NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV65SdtRelatorioModoTexto',fld:'vSDTRELATORIOMODOTEXTO'},{av:'AV63NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV8Desc3',fld:'vDESC3'},{av:'AV9Desc4',fld:'vDESC4'},{av:'AV68Desc4Fin',fld:'vDESC4FIN'},{av:'AV10Desc5',fld:'vDESC5'},{av:'AV66Desc5Fin',fld:'vDESC5FIN'},{av:'gx.fn.getCtrlProperty("DESC1","Caption")',ctrl:'DESC1',prop:'Caption'},{av:'gx.fn.getCtrlProperty("DESC2","Caption")',ctrl:'DESC2',prop:'Caption'},{av:'gx.fn.getCtrlProperty("DESC3","Caption")',ctrl:'DESC3',prop:'Caption'},{av:'gx.fn.getCtrlProperty("DESC4","Caption")',ctrl:'DESC4',prop:'Caption'},{av:'gx.fn.getCtrlProperty("DESC5","Caption")',ctrl:'DESC5',prop:'Caption'},{av:'AV42Chr',fld:'vCHR'},{av:'AV64Barras',fld:'vBARRAS'},{av:'AV13LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV34auxLote1',fld:'vAUXLOTE1'},{av:'AV35auxLote2',fld:'vAUXLOTE2'},{av:'AV29Lote3',fld:'vLOTE3'},{av:'AV44w',fld:'vW'},{av:'AV30Lote4',fld:'vLOTE4'},{av:'AV38auxLote3',fld:'vAUXLOTE3'},{av:'AV31Lote5',fld:'vLOTE5'},{av:'AV37auxLote4',fld:'vAUXLOTE4'}],[{av:'AV28Lote2',fld:'vLOTE2'},{av:'AV29Lote3',fld:'vLOTE3'},{av:'AV30Lote4',fld:'vLOTE4'},{av:'AV31Lote5',fld:'vLOTE5'},{av:'AV34auxLote1',fld:'vAUXLOTE1'},{av:'AV13LoteProdutoCombinacao',fld:'vLOTEPRODUTOCOMBINACAO'},{av:'AV64Barras',fld:'vBARRAS'},{av:'AV77GXV1',fld:'vGXV1'},{av:'AV35auxLote2',fld:'vAUXLOTE2'},{av:'AV65SdtRelatorioModoTexto',fld:'vSDTRELATORIOMODOTEXTO'},{av:'AV61Random',fld:'vRANDOM'},{av:'AV62NomeSessao',fld:'vNOMESESSAO'},{av:'AV63NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV12isErro',fld:'vISERRO'},{av:'AV68Desc4Fin',fld:'vDESC4FIN'},{av:'AV9Desc4',fld:'vDESC4'},{av:'AV66Desc5Fin',fld:'vDESC5FIN'},{av:'AV10Desc5',fld:'vDESC5'},{av:'AV42Chr',fld:'vCHR'},{av:'AV43CtrlB',fld:'vCTRLB'},{av:'AV47EtiquetaTermicaDensidade',fld:'vETIQUETATERMICADENSIDADE'},{av:'AV51PosInicio',fld:'vPOSINICIO'},{av:'AV45NomeArquivo',fld:'vNOMEARQUIVO'},{av:'AV44w',fld:'vW'},{av:'AV46Linha',fld:'vLINHA'},{av:'AV78GXV2',fld:'vGXV2'},{av:'AV38auxLote3',fld:'vAUXLOTE3'},{av:'AV79GXV3',fld:'vGXV3'},{av:'AV37auxLote4',fld:'vAUXLOTE4'},{av:'AV80GXV4',fld:'vGXV4'},{av:'AV81GXV5',fld:'vGXV5'},{av:'AV36auxLote5',fld:'vAUXLOTE5'},{av:'AV69auxcomb5',fld:'vAUXCOMB5'},{av:'AV82GXV6',fld:'vGXV6'}]];
   this.EnterCtrl = ["BTNIMPRIMIR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hemiteetiquetalocal());
