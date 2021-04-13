/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:34:52.71
*/
gx.evt.autoSkip = false;
gx.define('gx0aw0', false, function () {
   this.ServerClass =  "gx0aw0" ;
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
      this.AV13pProdutoEmpresaId=gx.fn.getControlValue("vPPRODUTOEMPRESAID") ;
      this.AV14pProdutoId=gx.fn.getIntegerValue("vPPRODUTOID",'.') ;
      this.AV15pMVAProdutoUF=gx.fn.getControlValue("vPMVAPRODUTOUF") ;
   };
   this.Validv_Cmvaprodutouf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCMVAPRODUTOUF");
         this.AnyError  = 0;
         if ( ! ( this.AV8cMVAProdutoUF == "" || this.AV8cMVAProdutoUF == "99" || this.AV8cMVAProdutoUF == "AC" || this.AV8cMVAProdutoUF == "AL" || this.AV8cMVAProdutoUF == "AP" || this.AV8cMVAProdutoUF == "AM" || this.AV8cMVAProdutoUF == "BA" || this.AV8cMVAProdutoUF == "CE" || this.AV8cMVAProdutoUF == "DF" || this.AV8cMVAProdutoUF == "ES" || this.AV8cMVAProdutoUF == "GO" || this.AV8cMVAProdutoUF == "MA" || this.AV8cMVAProdutoUF == "MT" || this.AV8cMVAProdutoUF == "MS" || this.AV8cMVAProdutoUF == "MG" || this.AV8cMVAProdutoUF == "PA" || this.AV8cMVAProdutoUF == "PB" || this.AV8cMVAProdutoUF == "PR" || this.AV8cMVAProdutoUF == "PE" || this.AV8cMVAProdutoUF == "PI" || this.AV8cMVAProdutoUF == "RJ" || this.AV8cMVAProdutoUF == "RN" || this.AV8cMVAProdutoUF == "RS" || this.AV8cMVAProdutoUF == "RO" || this.AV8cMVAProdutoUF == "RR" || this.AV8cMVAProdutoUF == "SC" || this.AV8cMVAProdutoUF == "SP" || this.AV8cMVAProdutoUF == "SE" || this.AV8cMVAProdutoUF == "TO" || (""==this.AV8cMVAProdutoUF) ) )
         {
            try {
               gxballoon.setError("Campo cMVAProdutoUF fora do intervalo");
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
   this.e131pj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141pj1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0aw0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2964,53,"PRODUTOEMPRESAID","Empresa do Produto","","ProdutoEmpresaId","char",0,"px",10,10,"left",null,[],2964,"ProdutoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2965,54,"PRODUTOID","Código do Produto","","ProdutoId","int",0,"px",10,10,"right",null,[],2965,"ProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(3690,55,"MVAPRODUTOUF","UF da MVA","MVAProdutoUF","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(3686,56,"MVAPRODUTOPCMARGEM","Percentual da Margem","Selecionar","MVAProdutoPcMargem","decimal",0,"px",6,6,"right",null,[],3686,"MVAProdutoPcMargem",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3687,57,"MVAPRODUTOAJUSTADO","Valor Ajustado?","","MVAProdutoAjustado","char",0,"px",1,1,"left",null,[],3687,"MVAProdutoAjustado",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3688,58,"MVAPRODUTOUSUARIOALT","Usuário de Alteração","","MVAProdutoUsuarioAlt","char",0,"px",12,12,"left",null,[],3688,"MVAProdutoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3689,59,"MVAPRODUTODATAHORAALT","Data/Hora de Alteração","","MVAProdutoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],3689,"MVAProdutoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPRODUTOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRODUTOEMPRESAID",gxz:"ZV6cProdutoEmpresaId",gxold:"OV6cProdutoEmpresaId",gxvar:"AV6cProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCPRODUTOEMPRESAID",gx.O.AV6cProdutoEmpresaId,0)},c2v:function(){gx.O.AV6cProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPRODUTOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPRODUTOID",gxz:"ZV7cProdutoId",gxold:"OV7cProdutoId",gxvar:"AV7cProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPRODUTOID",gx.O.AV7cProdutoId,0)},c2v:function(){gx.O.AV7cProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKMVAPRODUTOUF", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cmvaprodutouf,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMVAPRODUTOUF",gxz:"ZV8cMVAProdutoUF",gxold:"OV8cMVAProdutoUF",gxvar:"AV8cMVAProdutoUF",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cMVAProdutoUF=Value},v2z:function(Value){gx.O.ZV8cMVAProdutoUF=Value},v2c:function(){gx.fn.setComboBoxValue("vCMVAPRODUTOUF",gx.O.AV8cMVAProdutoUF)},c2v:function(){gx.O.AV8cMVAProdutoUF=this.val()},val:function(){return gx.fn.getControlValue("vCMVAPRODUTOUF")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKMVAPRODUTOPCMARGEM", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMVAPRODUTOPCMARGEM",gxz:"ZV9cMVAProdutoPcMargem",gxold:"OV9cMVAProdutoPcMargem",gxvar:"AV9cMVAProdutoPcMargem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cMVAProdutoPcMargem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV9cMVAProdutoPcMargem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCMVAPRODUTOPCMARGEM",gx.O.AV9cMVAProdutoPcMargem,2,',')},c2v:function(){gx.O.AV9cMVAProdutoPcMargem=this.val()},val:function(){return gx.fn.getDecimalValue("vCMVAPRODUTOPCMARGEM",'.',',')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKMVAPRODUTOAJUSTADO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMVAPRODUTOAJUSTADO",gxz:"ZV10cMVAProdutoAjustado",gxold:"OV10cMVAProdutoAjustado",gxvar:"AV10cMVAProdutoAjustado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cMVAProdutoAjustado=Value},v2z:function(Value){gx.O.ZV10cMVAProdutoAjustado=Value},v2c:function(){gx.fn.setControlValue("vCMVAPRODUTOAJUSTADO",gx.O.AV10cMVAProdutoAjustado,0)},c2v:function(){gx.O.AV10cMVAProdutoAjustado=this.val()},val:function(){return gx.fn.getControlValue("vCMVAPRODUTOAJUSTADO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKMVAPRODUTOUSUARIOALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMVAPRODUTOUSUARIOALT",gxz:"ZV11cMVAProdutoUsuarioAlt",gxold:"OV11cMVAProdutoUsuarioAlt",gxvar:"AV11cMVAProdutoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cMVAProdutoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV11cMVAProdutoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCMVAPRODUTOUSUARIOALT",gx.O.AV11cMVAProdutoUsuarioAlt,0)},c2v:function(){gx.O.AV11cMVAProdutoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCMVAPRODUTOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKMVAPRODUTODATAHORAALT", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMVAPRODUTODATAHORAALT",gxz:"ZV12cMVAProdutoDataHoraAlt",gxold:"OV12cMVAProdutoDataHoraAlt",gxvar:"AV12cMVAProdutoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cMVAProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12cMVAProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCMVAPRODUTODATAHORAALT",gx.O.AV12cMVAProdutoDataHoraAlt,0)},c2v:function(){gx.O.AV12cMVAProdutoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCMVAPRODUTODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOEMPRESAID",gxz:"Z2964ProdutoEmpresaId",gxold:"O2964ProdutoEmpresaId",gxvar:"A2964ProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2964ProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z2964ProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A2964ProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2964ProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PRODUTOID",gxz:"Z2965ProdutoId",gxold:"O2965ProdutoId",gxvar:"A2965ProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2965ProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2965ProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRODUTOID",row || gx.fn.currentGridRowImpl(51),gx.O.A2965ProdutoId,0)},c2v:function(){gx.O.A2965ProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRODUTOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MVAPRODUTOUF",gxz:"Z3690MVAProdutoUF",gxold:"O3690MVAProdutoUF",gxvar:"A3690MVAProdutoUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A3690MVAProdutoUF=Value},v2z:function(Value){gx.O.Z3690MVAProdutoUF=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MVAPRODUTOUF",row || gx.fn.currentGridRowImpl(51),gx.O.A3690MVAProdutoUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3690MVAProdutoUF=this.val()},val:function(row){return gx.fn.getGridControlValue("MVAPRODUTOUF",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MVAPRODUTOPCMARGEM",gxz:"Z3686MVAProdutoPcMargem",gxold:"O3686MVAProdutoPcMargem",gxvar:"A3686MVAProdutoPcMargem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3686MVAProdutoPcMargem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3686MVAProdutoPcMargem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MVAPRODUTOPCMARGEM",row || gx.fn.currentGridRowImpl(51),gx.O.A3686MVAProdutoPcMargem,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3686MVAProdutoPcMargem=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MVAPRODUTOPCMARGEM",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MVAPRODUTOAJUSTADO",gxz:"Z3687MVAProdutoAjustado",gxold:"O3687MVAProdutoAjustado",gxvar:"A3687MVAProdutoAjustado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3687MVAProdutoAjustado=Value},v2z:function(Value){gx.O.Z3687MVAProdutoAjustado=Value},v2c:function(row){gx.fn.setGridControlValue("MVAPRODUTOAJUSTADO",row || gx.fn.currentGridRowImpl(51),gx.O.A3687MVAProdutoAjustado,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3687MVAProdutoAjustado=this.val()},val:function(row){return gx.fn.getGridControlValue("MVAPRODUTOAJUSTADO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MVAPRODUTOUSUARIOALT",gxz:"Z3688MVAProdutoUsuarioAlt",gxold:"O3688MVAProdutoUsuarioAlt",gxvar:"A3688MVAProdutoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3688MVAProdutoUsuarioAlt=Value},v2z:function(Value){gx.O.Z3688MVAProdutoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("MVAPRODUTOUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A3688MVAProdutoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3688MVAProdutoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("MVAPRODUTOUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MVAPRODUTODATAHORAALT",gxz:"Z3689MVAProdutoDataHoraAlt",gxold:"O3689MVAProdutoDataHoraAlt",gxvar:"A3689MVAProdutoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3689MVAProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3689MVAProdutoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MVAPRODUTODATAHORAALT",row || gx.fn.currentGridRowImpl(51),gx.O.A3689MVAProdutoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3689MVAProdutoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MVAPRODUTODATAHORAALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cProdutoEmpresaId = "" ;
   this.ZV6cProdutoEmpresaId = "" ;
   this.OV6cProdutoEmpresaId = "" ;
   this.AV7cProdutoId = 0 ;
   this.ZV7cProdutoId = 0 ;
   this.OV7cProdutoId = 0 ;
   this.AV8cMVAProdutoUF = "" ;
   this.ZV8cMVAProdutoUF = "" ;
   this.OV8cMVAProdutoUF = "" ;
   this.AV9cMVAProdutoPcMargem = 0 ;
   this.ZV9cMVAProdutoPcMargem = 0 ;
   this.OV9cMVAProdutoPcMargem = 0 ;
   this.AV10cMVAProdutoAjustado = "" ;
   this.ZV10cMVAProdutoAjustado = "" ;
   this.OV10cMVAProdutoAjustado = "" ;
   this.AV11cMVAProdutoUsuarioAlt = "" ;
   this.ZV11cMVAProdutoUsuarioAlt = "" ;
   this.OV11cMVAProdutoUsuarioAlt = "" ;
   this.AV12cMVAProdutoDataHoraAlt = gx.date.nullDate() ;
   this.ZV12cMVAProdutoDataHoraAlt = gx.date.nullDate() ;
   this.OV12cMVAProdutoDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2964ProdutoEmpresaId = "" ;
   this.O2964ProdutoEmpresaId = "" ;
   this.Z2965ProdutoId = 0 ;
   this.O2965ProdutoId = 0 ;
   this.Z3690MVAProdutoUF = "" ;
   this.O3690MVAProdutoUF = "" ;
   this.Z3686MVAProdutoPcMargem = 0 ;
   this.O3686MVAProdutoPcMargem = 0 ;
   this.Z3687MVAProdutoAjustado = "" ;
   this.O3687MVAProdutoAjustado = "" ;
   this.Z3688MVAProdutoUsuarioAlt = "" ;
   this.O3688MVAProdutoUsuarioAlt = "" ;
   this.Z3689MVAProdutoDataHoraAlt = gx.date.nullDate() ;
   this.O3689MVAProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV6cProdutoEmpresaId = "" ;
   this.AV7cProdutoId = 0 ;
   this.AV8cMVAProdutoUF = "" ;
   this.AV9cMVAProdutoPcMargem = 0 ;
   this.AV10cMVAProdutoAjustado = "" ;
   this.AV11cMVAProdutoUsuarioAlt = "" ;
   this.AV12cMVAProdutoDataHoraAlt = gx.date.nullDate() ;
   this.AV13pProdutoEmpresaId = "" ;
   this.AV14pProdutoId = 0 ;
   this.AV15pMVAProdutoUF = "" ;
   this.AV5LinkSelection = "" ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A2965ProdutoId = 0 ;
   this.A3690MVAProdutoUF = "" ;
   this.A3686MVAProdutoPcMargem = 0 ;
   this.A3687MVAProdutoAjustado = "" ;
   this.A3688MVAProdutoUsuarioAlt = "" ;
   this.A3689MVAProdutoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131pj2_client": ["ENTER", true] ,"e141pj1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cMVAProdutoUF',fld:'vCMVAPRODUTOUF'},{av:'AV9cMVAProdutoPcMargem',fld:'vCMVAPRODUTOPCMARGEM'},{av:'AV10cMVAProdutoAjustado',fld:'vCMVAPRODUTOAJUSTADO'},{av:'AV11cMVAProdutoUsuarioAlt',fld:'vCMVAPRODUTOUSUARIOALT'},{av:'AV12cMVAProdutoDataHoraAlt',fld:'vCMVAPRODUTODATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2965ProdutoId',fld:'PRODUTOID'},{av:'A3690MVAProdutoUF',fld:'MVAPRODUTOUF'}],[{av:'AV13pProdutoEmpresaId',fld:'vPPRODUTOEMPRESAID'},{av:'AV14pProdutoId',fld:'vPPRODUTOID'},{av:'AV15pMVAProdutoUF',fld:'vPMVAPRODUTOUF'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cMVAProdutoUF',fld:'vCMVAPRODUTOUF'},{av:'AV9cMVAProdutoPcMargem',fld:'vCMVAPRODUTOPCMARGEM'},{av:'AV10cMVAProdutoAjustado',fld:'vCMVAPRODUTOAJUSTADO'},{av:'AV11cMVAProdutoUsuarioAlt',fld:'vCMVAPRODUTOUSUARIOALT'},{av:'AV12cMVAProdutoDataHoraAlt',fld:'vCMVAPRODUTODATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cMVAProdutoUF',fld:'vCMVAPRODUTOUF'},{av:'AV9cMVAProdutoPcMargem',fld:'vCMVAPRODUTOPCMARGEM'},{av:'AV10cMVAProdutoAjustado',fld:'vCMVAPRODUTOAJUSTADO'},{av:'AV11cMVAProdutoUsuarioAlt',fld:'vCMVAPRODUTOUSUARIOALT'},{av:'AV12cMVAProdutoDataHoraAlt',fld:'vCMVAPRODUTODATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cMVAProdutoUF',fld:'vCMVAPRODUTOUF'},{av:'AV9cMVAProdutoPcMargem',fld:'vCMVAPRODUTOPCMARGEM'},{av:'AV10cMVAProdutoAjustado',fld:'vCMVAPRODUTOAJUSTADO'},{av:'AV11cMVAProdutoUsuarioAlt',fld:'vCMVAPRODUTOUSUARIOALT'},{av:'AV12cMVAProdutoDataHoraAlt',fld:'vCMVAPRODUTODATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProdutoEmpresaId',fld:'vCPRODUTOEMPRESAID'},{av:'AV7cProdutoId',fld:'vCPRODUTOID'},{av:'AV8cMVAProdutoUF',fld:'vCMVAPRODUTOUF'},{av:'AV9cMVAProdutoPcMargem',fld:'vCMVAPRODUTOPCMARGEM'},{av:'AV10cMVAProdutoAjustado',fld:'vCMVAPRODUTOAJUSTADO'},{av:'AV11cMVAProdutoUsuarioAlt',fld:'vCMVAPRODUTOUSUARIOALT'},{av:'AV12cMVAProdutoDataHoraAlt',fld:'vCMVAPRODUTODATAHORAALT'}],[]];
   this.setVCMap("AV13pProdutoEmpresaId", "vPPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV14pProdutoId", "vPPRODUTOID", 0, "int");
   this.setVCMap("AV15pMVAProdutoUF", "vPMVAPRODUTOUF", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0aw0());
