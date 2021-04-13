/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:43:48.29
*/
gx.evt.autoSkip = false;
gx.define('gx0ju0', false, function () {
   this.ServerClass =  "gx0ju0" ;
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
      this.AV13pPartilhaICMSEmpresaId=gx.fn.getControlValue("vPPARTILHAICMSEMPRESAID") ;
      this.AV14pPartilhaICMSUF=gx.fn.getControlValue("vPPARTILHAICMSUF") ;
      this.AV15pPartilhaICMSSequencia=gx.fn.getIntegerValue("vPPARTILHAICMSSEQUENCIA",'.') ;
   };
   this.Validv_Cpartilhaicmsuf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCPARTILHAICMSUF");
         this.AnyError  = 0;
         if ( ! ( this.AV7cPartilhaICMSUF == "" || this.AV7cPartilhaICMSUF == "AC" || this.AV7cPartilhaICMSUF == "AL" || this.AV7cPartilhaICMSUF == "AP" || this.AV7cPartilhaICMSUF == "AM" || this.AV7cPartilhaICMSUF == "BA" || this.AV7cPartilhaICMSUF == "CE" || this.AV7cPartilhaICMSUF == "DF" || this.AV7cPartilhaICMSUF == "ES" || this.AV7cPartilhaICMSUF == "GO" || this.AV7cPartilhaICMSUF == "MA" || this.AV7cPartilhaICMSUF == "MT" || this.AV7cPartilhaICMSUF == "MS" || this.AV7cPartilhaICMSUF == "MG" || this.AV7cPartilhaICMSUF == "PA" || this.AV7cPartilhaICMSUF == "PB" || this.AV7cPartilhaICMSUF == "PR" || this.AV7cPartilhaICMSUF == "PE" || this.AV7cPartilhaICMSUF == "PI" || this.AV7cPartilhaICMSUF == "RJ" || this.AV7cPartilhaICMSUF == "RN" || this.AV7cPartilhaICMSUF == "RS" || this.AV7cPartilhaICMSUF == "RO" || this.AV7cPartilhaICMSUF == "RR" || this.AV7cPartilhaICMSUF == "SC" || this.AV7cPartilhaICMSUF == "SP" || this.AV7cPartilhaICMSUF == "SE" || this.AV7cPartilhaICMSUF == "TO" || this.AV7cPartilhaICMSUF == "EX" || (""==this.AV7cPartilhaICMSUF) ) )
         {
            try {
               gxballoon.setError("Campo cPartilhaICMSUF fora do intervalo");
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
   this.e131xh2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141xh1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ju0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9560,53,"PARTILHAICMSEMPRESAID","Partilha ICMSEmpresa Id","","PartilhaICMSEmpresaId","char",0,"px",10,10,"left",null,[],9560,"PartilhaICMSEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(9561,54,"PARTILHAICMSUF","Partilha ICMSUF","PartilhaICMSUF","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(9562,55,"PARTILHAICMSSEQUENCIA","Partilha ICMSSequencia","","PartilhaICMSSequencia","int",0,"px",2,2,"right",null,[],9562,"PartilhaICMSSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9563,56,"PARTILHAICMSPRODUTOEMPRESAID","Partilha ICMSProduto Empresa Id","","PartilhaICMSProdutoEmpresaId","char",0,"px",10,10,"left",null,[],9563,"PartilhaICMSProdutoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9564,57,"PARTILHAICMSPRODUTOID","Partilha ICMSProduto Id","","PartilhaICMSProdutoId","int",0,"px",10,10,"right",null,[],9564,"PartilhaICMSProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10670,58,"PARTILHAICMSNCMCODIGO","NCM","","PartilhaICMSNCMCodigo","int",0,"px",8,8,"right",null,[],10670,"PartilhaICMSNCMCodigo",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPARTILHAICMSEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARTILHAICMSEMPRESAID",gxz:"ZV6cPartilhaICMSEmpresaId",gxold:"OV6cPartilhaICMSEmpresaId",gxvar:"AV6cPartilhaICMSEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cPartilhaICMSEmpresaId=Value},v2z:function(Value){gx.O.ZV6cPartilhaICMSEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCPARTILHAICMSEMPRESAID",gx.O.AV6cPartilhaICMSEmpresaId,0)},c2v:function(){gx.O.AV6cPartilhaICMSEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPARTILHAICMSEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPARTILHAICMSUF", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cpartilhaicmsuf,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARTILHAICMSUF",gxz:"ZV7cPartilhaICMSUF",gxold:"OV7cPartilhaICMSUF",gxvar:"AV7cPartilhaICMSUF",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7cPartilhaICMSUF=Value},v2z:function(Value){gx.O.ZV7cPartilhaICMSUF=Value},v2c:function(){gx.fn.setComboBoxValue("vCPARTILHAICMSUF",gx.O.AV7cPartilhaICMSUF)},c2v:function(){gx.O.AV7cPartilhaICMSUF=this.val()},val:function(){return gx.fn.getControlValue("vCPARTILHAICMSUF")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPARTILHAICMSSEQUENCIA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARTILHAICMSSEQUENCIA",gxz:"ZV8cPartilhaICMSSequencia",gxold:"OV8cPartilhaICMSSequencia",gxvar:"AV8cPartilhaICMSSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cPartilhaICMSSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cPartilhaICMSSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPARTILHAICMSSEQUENCIA",gx.O.AV8cPartilhaICMSSequencia,0)},c2v:function(){gx.O.AV8cPartilhaICMSSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPARTILHAICMSSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPARTILHAICMSPRODUTOEMPRESAID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARTILHAICMSPRODUTOEMPRESAID",gxz:"ZV9cPartilhaICMSProdutoEmpresaId",gxold:"OV9cPartilhaICMSProdutoEmpresaId",gxvar:"AV9cPartilhaICMSProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cPartilhaICMSProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV9cPartilhaICMSProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCPARTILHAICMSPRODUTOEMPRESAID",gx.O.AV9cPartilhaICMSProdutoEmpresaId,0)},c2v:function(){gx.O.AV9cPartilhaICMSProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPARTILHAICMSPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPARTILHAICMSPRODUTOID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARTILHAICMSPRODUTOID",gxz:"ZV10cPartilhaICMSProdutoId",gxold:"OV10cPartilhaICMSProdutoId",gxvar:"AV10cPartilhaICMSProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cPartilhaICMSProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cPartilhaICMSProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPARTILHAICMSPRODUTOID",gx.O.AV10cPartilhaICMSProdutoId,0)},c2v:function(){gx.O.AV10cPartilhaICMSProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPARTILHAICMSPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPARTILHAICMSALIINTERNA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARTILHAICMSALIINTERNA",gxz:"ZV11cPartilhaICMSAliInterna",gxold:"OV11cPartilhaICMSAliInterna",gxvar:"AV11cPartilhaICMSAliInterna",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cPartilhaICMSAliInterna=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV11cPartilhaICMSAliInterna=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCPARTILHAICMSALIINTERNA",gx.O.AV11cPartilhaICMSAliInterna,4,',')},c2v:function(){gx.O.AV11cPartilhaICMSAliInterna=this.val()},val:function(){return gx.fn.getDecimalValue("vCPARTILHAICMSALIINTERNA",'.',',')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKPARTILHAICMSALIINTERESTADUAL", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARTILHAICMSALIINTERESTADUAL",gxz:"ZV12cPartilhaICMSAliInterEstadual",gxold:"OV12cPartilhaICMSAliInterEstadual",gxvar:"AV12cPartilhaICMSAliInterEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cPartilhaICMSAliInterEstadual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV12cPartilhaICMSAliInterEstadual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCPARTILHAICMSALIINTERESTADUAL",gx.O.AV12cPartilhaICMSAliInterEstadual,4,',')},c2v:function(){gx.O.AV12cPartilhaICMSAliInterEstadual=this.val()},val:function(){return gx.fn.getDecimalValue("vCPARTILHAICMSALIINTERESTADUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARTILHAICMSEMPRESAID",gxz:"Z9560PartilhaICMSEmpresaId",gxold:"O9560PartilhaICMSEmpresaId",gxvar:"A9560PartilhaICMSEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9560PartilhaICMSEmpresaId=Value},v2z:function(Value){gx.O.Z9560PartilhaICMSEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PARTILHAICMSEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A9560PartilhaICMSEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9560PartilhaICMSEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PARTILHAICMSEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARTILHAICMSUF",gxz:"Z9561PartilhaICMSUF",gxold:"O9561PartilhaICMSUF",gxvar:"A9561PartilhaICMSUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A9561PartilhaICMSUF=Value},v2z:function(Value){gx.O.Z9561PartilhaICMSUF=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PARTILHAICMSUF",row || gx.fn.currentGridRowImpl(51),gx.O.A9561PartilhaICMSUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9561PartilhaICMSUF=this.val()},val:function(row){return gx.fn.getGridControlValue("PARTILHAICMSUF",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARTILHAICMSSEQUENCIA",gxz:"Z9562PartilhaICMSSequencia",gxold:"O9562PartilhaICMSSequencia",gxvar:"A9562PartilhaICMSSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9562PartilhaICMSSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9562PartilhaICMSSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARTILHAICMSSEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A9562PartilhaICMSSequencia,0)},c2v:function(){gx.O.A9562PartilhaICMSSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARTILHAICMSSEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARTILHAICMSPRODUTOEMPRESAID",gxz:"Z9563PartilhaICMSProdutoEmpresaId",gxold:"O9563PartilhaICMSProdutoEmpresaId",gxvar:"A9563PartilhaICMSProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9563PartilhaICMSProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z9563PartilhaICMSProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PARTILHAICMSPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A9563PartilhaICMSProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9563PartilhaICMSProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PARTILHAICMSPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARTILHAICMSPRODUTOID",gxz:"Z9564PartilhaICMSProdutoId",gxold:"O9564PartilhaICMSProdutoId",gxvar:"A9564PartilhaICMSProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9564PartilhaICMSProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9564PartilhaICMSProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARTILHAICMSPRODUTOID",row || gx.fn.currentGridRowImpl(51),gx.O.A9564PartilhaICMSProdutoId,0)},c2v:function(){gx.O.A9564PartilhaICMSProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARTILHAICMSPRODUTOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARTILHAICMSNCMCODIGO",gxz:"Z10670PartilhaICMSNCMCodigo",gxold:"O10670PartilhaICMSNCMCodigo",gxvar:"A10670PartilhaICMSNCMCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10670PartilhaICMSNCMCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10670PartilhaICMSNCMCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARTILHAICMSNCMCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A10670PartilhaICMSNCMCodigo,0)},c2v:function(){gx.O.A10670PartilhaICMSNCMCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARTILHAICMSNCMCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cPartilhaICMSEmpresaId = "" ;
   this.ZV6cPartilhaICMSEmpresaId = "" ;
   this.OV6cPartilhaICMSEmpresaId = "" ;
   this.AV7cPartilhaICMSUF = "" ;
   this.ZV7cPartilhaICMSUF = "" ;
   this.OV7cPartilhaICMSUF = "" ;
   this.AV8cPartilhaICMSSequencia = 0 ;
   this.ZV8cPartilhaICMSSequencia = 0 ;
   this.OV8cPartilhaICMSSequencia = 0 ;
   this.AV9cPartilhaICMSProdutoEmpresaId = "" ;
   this.ZV9cPartilhaICMSProdutoEmpresaId = "" ;
   this.OV9cPartilhaICMSProdutoEmpresaId = "" ;
   this.AV10cPartilhaICMSProdutoId = 0 ;
   this.ZV10cPartilhaICMSProdutoId = 0 ;
   this.OV10cPartilhaICMSProdutoId = 0 ;
   this.AV11cPartilhaICMSAliInterna = 0 ;
   this.ZV11cPartilhaICMSAliInterna = 0 ;
   this.OV11cPartilhaICMSAliInterna = 0 ;
   this.AV12cPartilhaICMSAliInterEstadual = 0 ;
   this.ZV12cPartilhaICMSAliInterEstadual = 0 ;
   this.OV12cPartilhaICMSAliInterEstadual = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9560PartilhaICMSEmpresaId = "" ;
   this.O9560PartilhaICMSEmpresaId = "" ;
   this.Z9561PartilhaICMSUF = "" ;
   this.O9561PartilhaICMSUF = "" ;
   this.Z9562PartilhaICMSSequencia = 0 ;
   this.O9562PartilhaICMSSequencia = 0 ;
   this.Z9563PartilhaICMSProdutoEmpresaId = "" ;
   this.O9563PartilhaICMSProdutoEmpresaId = "" ;
   this.Z9564PartilhaICMSProdutoId = 0 ;
   this.O9564PartilhaICMSProdutoId = 0 ;
   this.Z10670PartilhaICMSNCMCodigo = 0 ;
   this.O10670PartilhaICMSNCMCodigo = 0 ;
   this.AV6cPartilhaICMSEmpresaId = "" ;
   this.AV7cPartilhaICMSUF = "" ;
   this.AV8cPartilhaICMSSequencia = 0 ;
   this.AV9cPartilhaICMSProdutoEmpresaId = "" ;
   this.AV10cPartilhaICMSProdutoId = 0 ;
   this.AV11cPartilhaICMSAliInterna = 0 ;
   this.AV12cPartilhaICMSAliInterEstadual = 0 ;
   this.AV13pPartilhaICMSEmpresaId = "" ;
   this.AV14pPartilhaICMSUF = "" ;
   this.AV15pPartilhaICMSSequencia = 0 ;
   this.A9596PartilhaICMSAliInterEstadual = 0 ;
   this.A9595PartilhaICMSAliInterna = 0 ;
   this.AV5LinkSelection = "" ;
   this.A9560PartilhaICMSEmpresaId = "" ;
   this.A9561PartilhaICMSUF = "" ;
   this.A9562PartilhaICMSSequencia = 0 ;
   this.A9563PartilhaICMSProdutoEmpresaId = "" ;
   this.A9564PartilhaICMSProdutoId = 0 ;
   this.A10670PartilhaICMSNCMCodigo = 0 ;
   this.Events = {"e131xh2_client": ["ENTER", true] ,"e141xh1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPartilhaICMSEmpresaId',fld:'vCPARTILHAICMSEMPRESAID'},{av:'AV7cPartilhaICMSUF',fld:'vCPARTILHAICMSUF'},{av:'AV8cPartilhaICMSSequencia',fld:'vCPARTILHAICMSSEQUENCIA'},{av:'AV9cPartilhaICMSProdutoEmpresaId',fld:'vCPARTILHAICMSPRODUTOEMPRESAID'},{av:'AV10cPartilhaICMSProdutoId',fld:'vCPARTILHAICMSPRODUTOID'},{av:'AV11cPartilhaICMSAliInterna',fld:'vCPARTILHAICMSALIINTERNA'},{av:'AV12cPartilhaICMSAliInterEstadual',fld:'vCPARTILHAICMSALIINTERESTADUAL'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9560PartilhaICMSEmpresaId',fld:'PARTILHAICMSEMPRESAID'},{av:'A9561PartilhaICMSUF',fld:'PARTILHAICMSUF'},{av:'A9562PartilhaICMSSequencia',fld:'PARTILHAICMSSEQUENCIA'}],[{av:'AV13pPartilhaICMSEmpresaId',fld:'vPPARTILHAICMSEMPRESAID'},{av:'AV14pPartilhaICMSUF',fld:'vPPARTILHAICMSUF'},{av:'AV15pPartilhaICMSSequencia',fld:'vPPARTILHAICMSSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPartilhaICMSEmpresaId',fld:'vCPARTILHAICMSEMPRESAID'},{av:'AV7cPartilhaICMSUF',fld:'vCPARTILHAICMSUF'},{av:'AV8cPartilhaICMSSequencia',fld:'vCPARTILHAICMSSEQUENCIA'},{av:'AV9cPartilhaICMSProdutoEmpresaId',fld:'vCPARTILHAICMSPRODUTOEMPRESAID'},{av:'AV10cPartilhaICMSProdutoId',fld:'vCPARTILHAICMSPRODUTOID'},{av:'AV11cPartilhaICMSAliInterna',fld:'vCPARTILHAICMSALIINTERNA'},{av:'AV12cPartilhaICMSAliInterEstadual',fld:'vCPARTILHAICMSALIINTERESTADUAL'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPartilhaICMSEmpresaId',fld:'vCPARTILHAICMSEMPRESAID'},{av:'AV7cPartilhaICMSUF',fld:'vCPARTILHAICMSUF'},{av:'AV8cPartilhaICMSSequencia',fld:'vCPARTILHAICMSSEQUENCIA'},{av:'AV9cPartilhaICMSProdutoEmpresaId',fld:'vCPARTILHAICMSPRODUTOEMPRESAID'},{av:'AV10cPartilhaICMSProdutoId',fld:'vCPARTILHAICMSPRODUTOID'},{av:'AV11cPartilhaICMSAliInterna',fld:'vCPARTILHAICMSALIINTERNA'},{av:'AV12cPartilhaICMSAliInterEstadual',fld:'vCPARTILHAICMSALIINTERESTADUAL'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPartilhaICMSEmpresaId',fld:'vCPARTILHAICMSEMPRESAID'},{av:'AV7cPartilhaICMSUF',fld:'vCPARTILHAICMSUF'},{av:'AV8cPartilhaICMSSequencia',fld:'vCPARTILHAICMSSEQUENCIA'},{av:'AV9cPartilhaICMSProdutoEmpresaId',fld:'vCPARTILHAICMSPRODUTOEMPRESAID'},{av:'AV10cPartilhaICMSProdutoId',fld:'vCPARTILHAICMSPRODUTOID'},{av:'AV11cPartilhaICMSAliInterna',fld:'vCPARTILHAICMSALIINTERNA'},{av:'AV12cPartilhaICMSAliInterEstadual',fld:'vCPARTILHAICMSALIINTERESTADUAL'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPartilhaICMSEmpresaId',fld:'vCPARTILHAICMSEMPRESAID'},{av:'AV7cPartilhaICMSUF',fld:'vCPARTILHAICMSUF'},{av:'AV8cPartilhaICMSSequencia',fld:'vCPARTILHAICMSSEQUENCIA'},{av:'AV9cPartilhaICMSProdutoEmpresaId',fld:'vCPARTILHAICMSPRODUTOEMPRESAID'},{av:'AV10cPartilhaICMSProdutoId',fld:'vCPARTILHAICMSPRODUTOID'},{av:'AV11cPartilhaICMSAliInterna',fld:'vCPARTILHAICMSALIINTERNA'},{av:'AV12cPartilhaICMSAliInterEstadual',fld:'vCPARTILHAICMSALIINTERESTADUAL'}],[]];
   this.setVCMap("AV13pPartilhaICMSEmpresaId", "vPPARTILHAICMSEMPRESAID", 0, "char");
   this.setVCMap("AV14pPartilhaICMSUF", "vPPARTILHAICMSUF", 0, "char");
   this.setVCMap("AV15pPartilhaICMSSequencia", "vPPARTILHAICMSSEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ju0());
