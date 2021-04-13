/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:2:26.25
*/
gx.evt.autoSkip = false;
gx.define('hmvaproduto', false, function () {
   this.ServerClass =  "hmvaproduto" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV44SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV49Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A3687MVAProdutoAjustado=gx.fn.getControlValue("MVAPRODUTOAJUSTADO") ;
   };
   this.Validv_Produtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRODUTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Mvaprodutouf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMVAPRODUTOUF");
         this.AnyError  = 0;
         if ( ! ( this.AV27MVAProdutoUf == "" || this.AV27MVAProdutoUf == "99" || this.AV27MVAProdutoUf == "AC" || this.AV27MVAProdutoUf == "AL" || this.AV27MVAProdutoUf == "AP" || this.AV27MVAProdutoUf == "AM" || this.AV27MVAProdutoUf == "BA" || this.AV27MVAProdutoUf == "CE" || this.AV27MVAProdutoUf == "DF" || this.AV27MVAProdutoUf == "ES" || this.AV27MVAProdutoUf == "GO" || this.AV27MVAProdutoUf == "MA" || this.AV27MVAProdutoUf == "MT" || this.AV27MVAProdutoUf == "MS" || this.AV27MVAProdutoUf == "MG" || this.AV27MVAProdutoUf == "PA" || this.AV27MVAProdutoUf == "PB" || this.AV27MVAProdutoUf == "PR" || this.AV27MVAProdutoUf == "PE" || this.AV27MVAProdutoUf == "PI" || this.AV27MVAProdutoUf == "RJ" || this.AV27MVAProdutoUf == "RN" || this.AV27MVAProdutoUf == "RS" || this.AV27MVAProdutoUf == "RO" || this.AV27MVAProdutoUf == "RR" || this.AV27MVAProdutoUf == "SC" || this.AV27MVAProdutoUf == "SP" || this.AV27MVAProdutoUf == "SE" || this.AV27MVAProdutoUf == "TO" || (""==this.AV27MVAProdutoUf) ) )
         {
            try {
               gxballoon.setError("Campo MVAProdutoUf fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Gx_date=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTODAY");
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
   this.e11pc2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12pc2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17pc2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13pc2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14pc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15pc2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16pc2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20pc2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21pc2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22pc2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24pc2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25pc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26pc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,17,19,22,24,29,32,35,37,39,41,43,45,48,50,51,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,79,81];
   this.GXLastCtrlId =81;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",54,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmvaproduto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addComboBox(3690,55,"MVAPRODUTOUF","","MVAProdutoUF","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(3686,56,"MVAPRODUTOPCMARGEM","","","MVAProdutoPcMargem","decimal",0,"px",6,6,"right",null,[],3686,"MVAProdutoPcMargem",true,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5507,57,"MVAPRODUTOPCREDUCAOST","% Red.","","MVaProdutoPCReducaoST","decimal",0,"px",6,6,"right",null,[],5507,"MVaProdutoPCReducaoST",false,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(5508,58,"MVAPRODUTOALIQUOTAST","Ali. ICMS ST","","MVAProdutoAliquotaST","decimal",0,"px",6,6,"right",null,[],5508,"MVAProdutoAliquotaST",false,2,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpvalorajustado","vBMPVALORAJUSTADO",59,0,"px",17,"px",null,"","Valor Ajustado","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",60,0,"px",17,"px","e20pc2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",61,0,"px",17,"px","e21pc2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",62,0,"px",17,"px","e22pc2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE10",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Produtoid,isvalid:null,rgrid:[this.GridContainer],fld:"vPRODUTOID",gxz:"ZV28ProdutoId",gxold:"OV28ProdutoId",gxvar:"AV28ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28ProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOID",gx.O.AV28ProdutoId,0)},c2v:function(){gx.O.AV28ProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:120,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTODESC",gxz:"ZV29ProdutoDesc",gxold:"OV29ProdutoDesc",gxvar:"AV29ProdutoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ProdutoDesc=Value},v2z:function(Value){gx.O.ZV29ProdutoDesc=Value},v2c:function(){gx.fn.setControlValue("vPRODUTODESC",gx.O.AV29ProdutoDesc,0)},c2v:function(){gx.O.AV29ProdutoDesc=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTODESC")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Mvaprodutouf,isvalid:null,rgrid:[this.GridContainer],fld:"vMVAPRODUTOUF",gxz:"ZV27MVAProdutoUf",gxold:"OV27MVAProdutoUf",gxvar:"AV27MVAProdutoUf",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27MVAProdutoUf=Value},v2z:function(Value){gx.O.ZV27MVAProdutoUf=Value},v2c:function(){gx.fn.setComboBoxValue("vMVAPRODUTOUF",gx.O.AV27MVAProdutoUf)},c2v:function(){gx.O.AV27MVAProdutoUf=this.val()},val:function(){return gx.fn.getControlValue("vMVAPRODUTOUF")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLE4",grid:0};
   GXValidFnc[32]={fld:"TABLE6",grid:0};
   GXValidFnc[35]={fld:"IMAGE2",grid:0};
   GXValidFnc[37]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[39]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   GXValidFnc[43]={fld:"IMAGE1",grid:0};
   GXValidFnc[45]={fld:"TABLE5",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MVAPRODUTOUF",gxz:"Z3690MVAProdutoUF",gxold:"O3690MVAProdutoUF",gxvar:"A3690MVAProdutoUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3690MVAProdutoUF=Value},v2z:function(Value){gx.O.Z3690MVAProdutoUF=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MVAPRODUTOUF",row || gx.fn.currentGridRowImpl(54),gx.O.A3690MVAProdutoUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3690MVAProdutoUF=this.val()},val:function(row){return gx.fn.getGridControlValue("MVAPRODUTOUF",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MVAPRODUTOPCMARGEM",gxz:"Z3686MVAProdutoPcMargem",gxold:"O3686MVAProdutoPcMargem",gxvar:"A3686MVAProdutoPcMargem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3686MVAProdutoPcMargem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3686MVAProdutoPcMargem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MVAPRODUTOPCMARGEM",row || gx.fn.currentGridRowImpl(54),gx.O.A3686MVAProdutoPcMargem,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3686MVAProdutoPcMargem=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MVAPRODUTOPCMARGEM",row || gx.fn.currentGridRowImpl(54),'.',',')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MVAPRODUTOPCREDUCAOST",gxz:"Z5507MVaProdutoPCReducaoST",gxold:"O5507MVaProdutoPCReducaoST",gxvar:"A5507MVaProdutoPCReducaoST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5507MVaProdutoPCReducaoST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5507MVaProdutoPCReducaoST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MVAPRODUTOPCREDUCAOST",row || gx.fn.currentGridRowImpl(54),gx.O.A5507MVaProdutoPCReducaoST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5507MVaProdutoPCReducaoST=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MVAPRODUTOPCREDUCAOST",row || gx.fn.currentGridRowImpl(54),'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MVAPRODUTOALIQUOTAST",gxz:"Z5508MVAProdutoAliquotaST",gxold:"O5508MVAProdutoAliquotaST",gxvar:"A5508MVAProdutoAliquotaST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5508MVAProdutoAliquotaST=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5508MVAProdutoAliquotaST=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MVAPRODUTOALIQUOTAST",row || gx.fn.currentGridRowImpl(54),gx.O.A5508MVAProdutoAliquotaST,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5508MVAProdutoAliquotaST=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MVAPRODUTOALIQUOTAST",row || gx.fn.currentGridRowImpl(54),'.',',')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPVALORAJUSTADO",gxz:"ZV31bmpValorAjustado",gxold:"OV31bmpValorAjustado",gxvar:"AV31bmpValorAjustado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpValorAjustado=Value},v2z:function(Value){gx.O.ZV31bmpValorAjustado=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPVALORAJUSTADO",row || gx.fn.currentGridRowImpl(54),gx.O.AV31bmpValorAjustado,gx.O.AV54Bmpvalorajustado_GXI)},c2v:function(){gx.O.AV54Bmpvalorajustado_GXI=this.val_GXI();gx.O.AV31bmpValorAjustado=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPVALORAJUSTADO",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPVALORAJUSTADO_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV54Bmpvalorajustado_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(54),gx.O.AV7bmpAlt,gx.O.AV51Bmpalt_GXI)},c2v:function(){gx.O.AV51Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV51Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(54),gx.O.AV8bmpExc,gx.O.AV52Bmpexc_GXI)},c2v:function(){gx.O.AV52Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV52Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(54),gx.O.AV16bmpCon,gx.O.AV53Bmpcon_GXI)},c2v:function(){gx.O.AV53Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV53Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHARAUX",gxz:"ZV33CharAux",gxold:"OV33CharAux",gxvar:"AV33CharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33CharAux=Value},v2z:function(Value){gx.O.ZV33CharAux=Value},v2c:function(){gx.fn.setControlValue("vCHARAUX",gx.O.AV33CharAux,0)},c2v:function(){gx.O.AV33CharAux=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUX")},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV32IntAux",gxold:"OV32IntAux",gxvar:"AV32IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32IntAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32IntAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV32IntAux,0)},c2v:function(){gx.O.AV32IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODOUT",gxz:"ZV35ProdOut",gxold:"OV35ProdOut",gxvar:"AV35ProdOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ProdOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35ProdOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODOUT",gx.O.AV35ProdOut,0)},c2v:function(){gx.O.AV35ProdOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODOUT",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTECOMBINACAO",gxz:"ZV34LoteCombinacao",gxold:"OV34LoteCombinacao",gxvar:"AV34LoteCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34LoteCombinacao=Value},v2z:function(Value){gx.O.ZV34LoteCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTECOMBINACAO",gx.O.AV34LoteCombinacao,0)},c2v:function(){gx.O.AV34LoteCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTECOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOSUB",gxz:"ZV36GrupoSub",gxold:"OV36GrupoSub",gxvar:"AV36GrupoSub",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36GrupoSub=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36GrupoSub=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOSUB",gx.O.AV36GrupoSub,0)},c2v:function(){gx.O.AV36GrupoSub=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOSUB",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV37QtdeChar",gxold:"OV37QtdeChar",gxvar:"AV37QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV37QtdeChar,0)},c2v:function(){gx.O.AV37QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV41CodigoBarrasProdutoBarra",gxold:"OV41CodigoBarrasProdutoBarra",gxvar:"AV41CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV41CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV41CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV42ProdutoReferencia",gxold:"OV42ProdutoReferencia",gxvar:"AV42ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV42ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV42ProdutoReferencia,0)},c2v:function(){gx.O.AV42ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV43SNVenda",gxold:"OV43SNVenda",gxvar:"AV43SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43SNVenda=Value},v2z:function(Value){gx.O.ZV43SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV43SNVenda,0)},c2v:function(){gx.O.AV43SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[81]={fld:"JSPROD", format:2,grid:0};
   this.AV28ProdutoId = 0 ;
   this.ZV28ProdutoId = 0 ;
   this.OV28ProdutoId = 0 ;
   this.AV29ProdutoDesc = "" ;
   this.ZV29ProdutoDesc = "" ;
   this.OV29ProdutoDesc = "" ;
   this.AV27MVAProdutoUf = "" ;
   this.ZV27MVAProdutoUf = "" ;
   this.OV27MVAProdutoUf = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3690MVAProdutoUF = "" ;
   this.O3690MVAProdutoUF = "" ;
   this.Z3686MVAProdutoPcMargem = 0 ;
   this.O3686MVAProdutoPcMargem = 0 ;
   this.Z5507MVaProdutoPCReducaoST = 0 ;
   this.O5507MVaProdutoPCReducaoST = 0 ;
   this.Z5508MVAProdutoAliquotaST = 0 ;
   this.O5508MVAProdutoAliquotaST = 0 ;
   this.ZV31bmpValorAjustado = "" ;
   this.OV31bmpValorAjustado = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV33CharAux = "" ;
   this.ZV33CharAux = "" ;
   this.OV33CharAux = "" ;
   this.AV32IntAux = 0 ;
   this.ZV32IntAux = 0 ;
   this.OV32IntAux = 0 ;
   this.AV35ProdOut = 0 ;
   this.ZV35ProdOut = 0 ;
   this.OV35ProdOut = 0 ;
   this.AV34LoteCombinacao = "" ;
   this.ZV34LoteCombinacao = "" ;
   this.OV34LoteCombinacao = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV36GrupoSub = 0 ;
   this.ZV36GrupoSub = 0 ;
   this.OV36GrupoSub = 0 ;
   this.AV37QtdeChar = 0 ;
   this.ZV37QtdeChar = 0 ;
   this.OV37QtdeChar = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV41CodigoBarrasProdutoBarra = 0 ;
   this.ZV41CodigoBarrasProdutoBarra = 0 ;
   this.OV41CodigoBarrasProdutoBarra = 0 ;
   this.AV42ProdutoReferencia = "" ;
   this.ZV42ProdutoReferencia = "" ;
   this.OV42ProdutoReferencia = "" ;
   this.AV43SNVenda = "" ;
   this.ZV43SNVenda = "" ;
   this.OV43SNVenda = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28ProdutoId = 0 ;
   this.AV29ProdutoDesc = "" ;
   this.AV27MVAProdutoUf = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV33CharAux = "" ;
   this.AV32IntAux = 0 ;
   this.AV35ProdOut = 0 ;
   this.AV34LoteCombinacao = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV36GrupoSub = 0 ;
   this.AV37QtdeChar = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV41CodigoBarrasProdutoBarra = 0 ;
   this.AV42ProdutoReferencia = "" ;
   this.AV43SNVenda = "" ;
   this.AV11OrderedBy = 0 ;
   this.A3687MVAProdutoAjustado = "" ;
   this.A2965ProdutoId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A3690MVAProdutoUF = "" ;
   this.A3686MVAProdutoPcMargem = 0 ;
   this.A5507MVaProdutoPCReducaoST = 0 ;
   this.A5508MVAProdutoAliquotaST = 0 ;
   this.AV31bmpValorAjustado = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV44SnRecuperaFiltro = "" ;
   this.AV49Pgmname = "" ;
   this.Events = {"e11pc2_client": ["'ANTERIOR'", true] ,"e12pc2_client": ["'PROXIMO'", true] ,"e17pc2_client": ["VPAGINA.CLICK", true] ,"e13pc2_client": ["'NOVO'", true] ,"e14pc2_client": ["'FECHAR'", true] ,"e15pc2_client": ["'IMPRIMIR'", true] ,"e16pc2_client": ["'PROCURAR'", true] ,"e20pc2_client": ["'ALTERAR'", true] ,"e21pc2_client": ["'EXCLUIR'", true] ,"e22pc2_client": ["'CONSULTAR'", true] ,"e24pc2_client": ["'ATUALIZAPAGINA'", true] ,"e25pc2_client": ["ENTER", true] ,"e26pc2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'AV27MVAProdutoUf',fld:'vMVAPRODUTOUF'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV49Pgmname',fld:'vPGMNAME'},{av:'A3687MVAProdutoAjustado',fld:'MVAPRODUTOAJUSTADO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'AV27MVAProdutoUf',fld:'vMVAPRODUTOUF'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV49Pgmname',fld:'vPGMNAME'},{av:'A3687MVAProdutoAjustado',fld:'MVAPRODUTOAJUSTADO'}],[{ctrl:'MVAPRODUTOUF'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'MVAPRODUTOPCMARGEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MVAPRODUTOPCMARGEM","Title")',ctrl:'MVAPRODUTOPCMARGEM',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'AV29ProdutoDesc',fld:'vPRODUTODESC'},{av:'AV27MVAProdutoUf',fld:'vMVAPRODUTOUF'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'AV27MVAProdutoUf',fld:'vMVAPRODUTOUF'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV49Pgmname',fld:'vPGMNAME'},{av:'A3687MVAProdutoAjustado',fld:'MVAPRODUTOAJUSTADO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29ProdutoDesc',fld:'vPRODUTODESC'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'AV27MVAProdutoUf',fld:'vMVAPRODUTOUF'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV49Pgmname',fld:'vPGMNAME'},{av:'A3687MVAProdutoAjustado',fld:'MVAPRODUTOAJUSTADO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV29ProdutoDesc',fld:'vPRODUTODESC'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'AV27MVAProdutoUf',fld:'vMVAPRODUTOUF'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV49Pgmname',fld:'vPGMNAME'},{av:'A3687MVAProdutoAjustado',fld:'MVAPRODUTOAJUSTADO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29ProdutoDesc',fld:'vPRODUTODESC'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ProdutoDesc',fld:'vPRODUTODESC'},{av:'AV27MVAProdutoUf',fld:'vMVAPRODUTOUF'},{av:'AV49Pgmname',fld:'vPGMNAME'}],[{av:'AV40SnErro',fld:'vSNERRO'},{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'AV55GXLvl266',fld:'vGXLVL266'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV49Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV49Pgmname',fld:'vPGMNAME'},{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'AV29ProdutoDesc',fld:'vPRODUTODESC'},{av:'AV50Pgmdesc',fld:'vPGMDESC'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2965ProdutoId',fld:'PRODUTOID'}],[{av:'AV40SnErro',fld:'vSNERRO'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV45QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV29ProdutoDesc',fld:'vPRODUTODESC'},{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'AV55GXLvl266',fld:'vGXLVL266'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'AV27MVAProdutoUf',fld:'vMVAPRODUTOUF'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV49Pgmname',fld:'vPGMNAME'},{av:'A3687MVAProdutoAjustado',fld:'MVAPRODUTOAJUSTADO'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29ProdutoDesc',fld:'vPRODUTODESC'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV55GXLvl266',fld:'vGXLVL266'},{av:'AV40SnErro',fld:'vSNERRO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'A3690MVAProdutoUF',fld:'MVAPRODUTOUF'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ProdutoDesc',fld:'vPRODUTODESC'},{av:'AV27MVAProdutoUf',fld:'vMVAPRODUTOUF'},{av:'AV49Pgmname',fld:'vPGMNAME'}],[{av:'A3690MVAProdutoUF',fld:'MVAPRODUTOUF'},{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'A3690MVAProdutoUF',fld:'MVAPRODUTOUF'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ProdutoDesc',fld:'vPRODUTODESC'},{av:'AV27MVAProdutoUf',fld:'vMVAPRODUTOUF'},{av:'AV49Pgmname',fld:'vPGMNAME'}],[{av:'A3690MVAProdutoUF',fld:'MVAPRODUTOUF'},{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'A3690MVAProdutoUF',fld:'MVAPRODUTOUF'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29ProdutoDesc',fld:'vPRODUTODESC'},{av:'AV27MVAProdutoUf',fld:'vMVAPRODUTOUF'},{av:'AV49Pgmname',fld:'vPGMNAME'}],[{av:'A3690MVAProdutoUF',fld:'MVAPRODUTOUF'},{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3687MVAProdutoAjustado',fld:'MVAPRODUTOAJUSTADO'}],[{av:'AV31bmpValorAjustado',fld:'vBMPVALORAJUSTADO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV28ProdutoId',fld:'vPRODUTOID'},{av:'AV27MVAProdutoUf',fld:'vMVAPRODUTOUF'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV49Pgmname',fld:'vPGMNAME'},{av:'A3687MVAProdutoAjustado',fld:'MVAPRODUTOAJUSTADO'}],[]];
   this.setPrompt("IMGPROMPT", [16,68,68,65,66,72,71]);
   this.setVCMap("AV44SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV49Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A3687MVAProdutoAjustado", "MVAPRODUTOAJUSTADO", 0, "char");
   this.setVCMap("AV44SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV49Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A3687MVAProdutoAjustado", "MVAPRODUTOAJUSTADO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV44SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV49Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A3687MVAProdutoAjustado"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmvaproduto());
